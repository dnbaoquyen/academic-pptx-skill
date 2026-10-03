"""Hậu xử lý deck Buổi 1 sau khi build_W1_slides.js chạy xong.

1. Gắn "Chú thích thay thế" (alt text) vào shape tên FIG trên các slide có Hình.
2. Thêm hiệu ứng xuất hiện theo cú bấm cho các shape tên ANIM-<slide>-<k>:
   slide 13 — cả cột "Giới hạn" hiện trong một cú bấm;
   slide 24 — mỗi tình huống hiện một cú bấm.

Dùng: python3 postprocess_W1.py deck.pptx   (đọc deck.meta.json nằm cạnh)
"""
import json
import re
import sys
import zipfile
from xml.sax.saxutils import quoteattr

deck = sys.argv[1]
meta = json.load(open(deck.replace(".pptx", ".meta.json"), encoding="utf-8"))
fig_alt = {int(k): v for k, v in meta["figAlt"].items()}

# Hiệu ứng: slide -> danh sách cú bấm, mỗi cú bấm là danh sách tiền tố tên shape
ANIM = {13: [["ANIM-13-"]], 24: [[f"ANIM-24-{i}"] for i in range(6)]}


def set_effect(ctn_id, spid, node_type):
    return (
        f'<p:par><p:cTn id="{ctn_id}" presetID="1" presetClass="entr" presetSubtype="0" fill="hold" nodeType="{node_type}">'
        '<p:stCondLst><p:cond delay="0"/></p:stCondLst><p:childTnLst><p:set><p:cBhvr>'
        f'<p:cTn id="{ctn_id + 1}" dur="1" fill="hold"><p:stCondLst><p:cond delay="0"/></p:stCondLst></p:cTn>'
        f'<p:tgtEl><p:spTgt spid="{spid}"/></p:tgtEl><p:attrNameLst><p:attrName>style.visibility</p:attrName></p:attrNameLst>'
        '</p:cBhvr><p:to><p:strVal val="visible"/></p:to></p:set></p:childTnLst></p:cTn></p:par>'
    )


def timing_xml(clicks):
    nid = 3
    pars = []
    for ids in clicks:
        outer, inner = nid, nid + 1
        nid += 2
        effects = []
        for j, spid in enumerate(ids):
            effects.append(set_effect(nid, spid, "clickEffect" if j == 0 else "withEffect"))
            nid += 2
        pars.append(
            f'<p:par><p:cTn id="{outer}" fill="hold"><p:stCondLst><p:cond delay="indefinite"/></p:stCondLst><p:childTnLst>'
            f'<p:par><p:cTn id="{inner}" fill="hold"><p:stCondLst><p:cond delay="0"/></p:stCondLst><p:childTnLst>'
            + "".join(effects)
            + "</p:childTnLst></p:cTn></p:par></p:childTnLst></p:cTn></p:par>"
        )
    return (
        '<p:timing><p:tnLst><p:par><p:cTn id="1" dur="indefinite" restart="never" nodeType="tmRoot"><p:childTnLst>'
        '<p:seq concurrent="1" nextAc="seek"><p:cTn id="2" dur="indefinite" nodeType="mainSeq"><p:childTnLst>'
        + "".join(pars)
        + '</p:childTnLst></p:cTn><p:prevCondLst><p:cond evt="onPrev" delay="0"><p:tgtEl><p:sldTgt/></p:tgtEl></p:cond></p:prevCondLst>'
        '<p:nextCondLst><p:cond evt="onNext" delay="0"><p:tgtEl><p:sldTgt/></p:tgtEl></p:cond></p:nextCondLst></p:seq>'
        "</p:childTnLst></p:cTn></p:par></p:tnLst></p:timing>"
    )


zin = zipfile.ZipFile(deck)
items = [(i, zin.read(i.filename)) for i in zin.infolist()]
zin.close()

out = []
for info, data in items:
    m = re.fullmatch(r"ppt/slides/slide(\d+)\.xml", info.filename)
    if m:
        n = int(m.group(1))
        xml = data.decode("utf-8")
        if n in fig_alt:
            xml, k = re.subn(r'(<p:cNvPr id="\d+" name="FIG")(?: descr="[^"]*")?', r"\1 descr=" + quoteattr(fig_alt[n]).replace("\\", "\\\\"), xml, count=1)
            assert k == 1, f"slide {n}: không thấy shape FIG"
        if n in ANIM:
            clicks = []
            for prefixes in ANIM[n]:
                ids = []
                for p in prefixes:
                    ids += re.findall(r'<p:cNvPr id="(\d+)" name="' + re.escape(p) + r'[^"]*"', xml)
                assert ids, f"slide {n}: không thấy shape {prefixes}"
                clicks.append(ids)
            assert "<p:timing>" not in xml
            xml = xml.replace("</p:clrMapOvr>", "</p:clrMapOvr>" + timing_xml(clicks), 1)
            assert "<p:timing>" in xml
        data = xml.encode("utf-8")
    out.append((info, data))

with zipfile.ZipFile(deck, "w", zipfile.ZIP_DEFLATED) as zout:
    for info, data in out:
        zout.writestr(info, data)
print("postprocessed", deck)
