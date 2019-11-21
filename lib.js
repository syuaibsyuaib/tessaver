'use strict';
var lib = function () {
    var l = {
        rels: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
        <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
            <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
        </Relationships>`,
        theme : `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
        <a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">
            <a:themeElements>
                <a:clrScheme name="Office">
                    <a:dk1>
                        <a:sysClr val="windowText" lastClr="000000"/>
                    </a:dk1>
                    <a:lt1>
                        <a:sysClr val="window" lastClr="FFFFFF"/>
                    </a:lt1>
                    <a:dk2>
                        <a:srgbClr val="44546A"/>
                    </a:dk2>
                    <a:lt2>
                        <a:srgbClr val="E7E6E6"/>
                    </a:lt2>
                    <a:accent1>
                        <a:srgbClr val="5B9BD5"/>
                    </a:accent1>
                    <a:accent2>
                        <a:srgbClr val="ED7D31"/>
                    </a:accent2>
                    <a:accent3>
                        <a:srgbClr val="A5A5A5"/>
                    </a:accent3>
                    <a:accent4>
                        <a:srgbClr val="FFC000"/>
                    </a:accent4>
                    <a:accent5>
                        <a:srgbClr val="4472C4"/>
                    </a:accent5>
                    <a:accent6>
                        <a:srgbClr val="70AD47"/>
                    </a:accent6>
                    <a:hlink>
                        <a:srgbClr val="0563C1"/>
                    </a:hlink>
                    <a:folHlink>
                        <a:srgbClr val="954F72"/>
                    </a:folHlink>
                </a:clrScheme>
                <a:fontScheme name="Office">
                    <a:majorFont>
                        <a:latin typeface="Calibri Light" panose="020F0302020204030204"/>
                        <a:ea typeface=""/>
                        <a:cs typeface=""/>
                        <a:font script="Jpan" typeface="游ゴシック Light"/>
                        <a:font script="Hang" typeface="맑은 고딕"/>
                        <a:font script="Hans" typeface="等线 Light"/>
                        <a:font script="Hant" typeface="新細明體"/>
                        <a:font script="Arab" typeface="Times New Roman"/>
                        <a:font script="Hebr" typeface="Times New Roman"/>
                        <a:font script="Thai" typeface="Tahoma"/>
                        <a:font script="Ethi" typeface="Nyala"/>
                        <a:font script="Beng" typeface="Vrinda"/>
                        <a:font script="Gujr" typeface="Shruti"/>
                        <a:font script="Khmr" typeface="MoolBoran"/>
                        <a:font script="Knda" typeface="Tunga"/>
                        <a:font script="Guru" typeface="Raavi"/>
                        <a:font script="Cans" typeface="Euphemia"/>
                        <a:font script="Cher" typeface="Plantagenet Cherokee"/>
                        <a:font script="Yiii" typeface="Microsoft Yi Baiti"/>
                        <a:font script="Tibt" typeface="Microsoft Himalaya"/>
                        <a:font script="Thaa" typeface="MV Boli"/>
                        <a:font script="Deva" typeface="Mangal"/>
                        <a:font script="Telu" typeface="Gautami"/>
                        <a:font script="Taml" typeface="Latha"/>
                        <a:font script="Syrc" typeface="Estrangelo Edessa"/>
                        <a:font script="Orya" typeface="Kalinga"/>
                        <a:font script="Mlym" typeface="Kartika"/>
                        <a:font script="Laoo" typeface="DokChampa"/>
                        <a:font script="Sinh" typeface="Iskoola Pota"/>
                        <a:font script="Mong" typeface="Mongolian Baiti"/>
                        <a:font script="Viet" typeface="Times New Roman"/>
                        <a:font script="Uigh" typeface="Microsoft Uighur"/>
                        <a:font script="Geor" typeface="Sylfaen"/>
                    </a:majorFont>
                    <a:minorFont>
                        <a:latin typeface="Calibri" panose="020F0502020204030204"/>
                        <a:ea typeface=""/>
                        <a:cs typeface=""/>
                        <a:font script="Jpan" typeface="游ゴシック"/>
                        <a:font script="Hang" typeface="맑은 고딕"/>
                        <a:font script="Hans" typeface="等线"/>
                        <a:font script="Hant" typeface="新細明體"/>
                        <a:font script="Arab" typeface="Arial"/>
                        <a:font script="Hebr" typeface="Arial"/>
                        <a:font script="Thai" typeface="Tahoma"/>
                        <a:font script="Ethi" typeface="Nyala"/>
                        <a:font script="Beng" typeface="Vrinda"/>
                        <a:font script="Gujr" typeface="Shruti"/>
                        <a:font script="Khmr" typeface="DaunPenh"/>
                        <a:font script="Knda" typeface="Tunga"/>
                        <a:font script="Guru" typeface="Raavi"/>
                        <a:font script="Cans" typeface="Euphemia"/>
                        <a:font script="Cher" typeface="Plantagenet Cherokee"/>
                        <a:font script="Yiii" typeface="Microsoft Yi Baiti"/>
                        <a:font script="Tibt" typeface="Microsoft Himalaya"/>
                        <a:font script="Thaa" typeface="MV Boli"/>
                        <a:font script="Deva" typeface="Mangal"/>
                        <a:font script="Telu" typeface="Gautami"/>
                        <a:font script="Taml" typeface="Latha"/>
                        <a:font script="Syrc" typeface="Estrangelo Edessa"/>
                        <a:font script="Orya" typeface="Kalinga"/>
                        <a:font script="Mlym" typeface="Kartika"/>
                        <a:font script="Laoo" typeface="DokChampa"/>
                        <a:font script="Sinh" typeface="Iskoola Pota"/>
                        <a:font script="Mong" typeface="Mongolian Baiti"/>
                        <a:font script="Viet" typeface="Arial"/>
                        <a:font script="Uigh" typeface="Microsoft Uighur"/>
                        <a:font script="Geor" typeface="Sylfaen"/>
                    </a:minorFont>
                </a:fontScheme>
                <a:fmtScheme name="Office">
                    <a:fillStyleLst>
                        <a:solidFill>
                            <a:schemeClr val="phClr"/>
                        </a:solidFill>
                        <a:gradFill rotWithShape="1">
                            <a:gsLst>
                                <a:gs pos="0">
                                    <a:schemeClr val="phClr">
                                        <a:lumMod val="110000"/>
                                        <a:satMod val="105000"/>
                                        <a:tint val="67000"/>
                                    </a:schemeClr>
                                </a:gs>
                                <a:gs pos="50000">
                                    <a:schemeClr val="phClr">
                                        <a:lumMod val="105000"/>
                                        <a:satMod val="103000"/>
                                        <a:tint val="73000"/>
                                    </a:schemeClr>
                                </a:gs>
                                <a:gs pos="100000">
                                    <a:schemeClr val="phClr">
                                        <a:lumMod val="105000"/>
                                        <a:satMod val="109000"/>
                                        <a:tint val="81000"/>
                                    </a:schemeClr>
                                </a:gs>
                            </a:gsLst>
                            <a:lin ang="5400000" scaled="0"/>
                        </a:gradFill>
                        <a:gradFill rotWithShape="1">
                            <a:gsLst>
                                <a:gs pos="0">
                                    <a:schemeClr val="phClr">
                                        <a:satMod val="103000"/>
                                        <a:lumMod val="102000"/>
                                        <a:tint val="94000"/>
                                    </a:schemeClr>
                                </a:gs>
                                <a:gs pos="50000">
                                    <a:schemeClr val="phClr">
                                        <a:satMod val="110000"/>
                                        <a:lumMod val="100000"/>
                                        <a:shade val="100000"/>
                                    </a:schemeClr>
                                </a:gs>
                                <a:gs pos="100000">
                                    <a:schemeClr val="phClr">
                                        <a:lumMod val="99000"/>
                                        <a:satMod val="120000"/>
                                        <a:shade val="78000"/>
                                    </a:schemeClr>
                                </a:gs>
                            </a:gsLst>
                            <a:lin ang="5400000" scaled="0"/>
                        </a:gradFill>
                    </a:fillStyleLst>
                    <a:lnStyleLst>
                        <a:ln w="6350" cap="flat" cmpd="sng" algn="ctr">
                            <a:solidFill>
                                <a:schemeClr val="phClr"/>
                            </a:solidFill>
                            <a:prstDash val="solid"/>
                            <a:miter lim="800000"/>
                        </a:ln>
                        <a:ln w="12700" cap="flat" cmpd="sng" algn="ctr">
                            <a:solidFill>
                                <a:schemeClr val="phClr"/>
                            </a:solidFill>
                            <a:prstDash val="solid"/>
                            <a:miter lim="800000"/>
                        </a:ln>
                        <a:ln w="19050" cap="flat" cmpd="sng" algn="ctr">
                            <a:solidFill>
                                <a:schemeClr val="phClr"/>
                            </a:solidFill>
                            <a:prstDash val="solid"/>
                            <a:miter lim="800000"/>
                        </a:ln>
                    </a:lnStyleLst>
                    <a:effectStyleLst>
                        <a:effectStyle>
                            <a:effectLst/>
                        </a:effectStyle>
                        <a:effectStyle>
                            <a:effectLst/>
                        </a:effectStyle>
                        <a:effectStyle>
                            <a:effectLst>
                                <a:outerShdw blurRad="57150" dist="19050" dir="5400000" algn="ctr" rotWithShape="0">
                                    <a:srgbClr val="000000">
                                        <a:alpha val="63000"/>
                                    </a:srgbClr>
                                </a:outerShdw>
                            </a:effectLst>
                        </a:effectStyle>
                    </a:effectStyleLst>
                    <a:bgFillStyleLst>
                        <a:solidFill>
                            <a:schemeClr val="phClr"/>
                        </a:solidFill>
                        <a:solidFill>
                            <a:schemeClr val="phClr">
                                <a:tint val="95000"/>
                                <a:satMod val="170000"/>
                            </a:schemeClr>
                        </a:solidFill>
                        <a:gradFill rotWithShape="1">
                            <a:gsLst>
                                <a:gs pos="0">
                                    <a:schemeClr val="phClr">
                                        <a:tint val="93000"/>
                                        <a:satMod val="150000"/>
                                        <a:shade val="98000"/>
                                        <a:lumMod val="102000"/>
                                    </a:schemeClr>
                                </a:gs>
                                <a:gs pos="50000">
                                    <a:schemeClr val="phClr">
                                        <a:tint val="98000"/>
                                        <a:satMod val="130000"/>
                                        <a:shade val="90000"/>
                                        <a:lumMod val="103000"/>
                                    </a:schemeClr>
                                </a:gs>
                                <a:gs pos="100000">
                                    <a:schemeClr val="phClr">
                                        <a:shade val="63000"/>
                                        <a:satMod val="120000"/>
                                    </a:schemeClr>
                                </a:gs>
                            </a:gsLst>
                            <a:lin ang="5400000" scaled="0"/>
                        </a:gradFill>
                    </a:bgFillStyleLst>
                </a:fmtScheme>
            </a:themeElements>
            <a:objectDefaults/>
            <a:extraClrSchemeLst/>
        </a:theme>`,
        xlrel: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
        <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
            <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
            <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="theme/theme1.xml"/>
            <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
            <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
        </Relationships>`,
        xlsheet1: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
        <worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" 
            xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
            <dimension ref="A1:B3"/>
            <sheetViews>
                <sheetView tabSelected="1" workbookViewId="0">
                    <selection activeCell="C6" sqref="C6"/>
                </sheetView>
            </sheetViews>
            <sheetFormatPr defaultRowHeight="15"/>
            <sheetData>
                <row r="1" spans="1:2">
                    <c r="A1" s="1" t="s">
                        <v>0</v>
                    </c>
                    <c r="B1" s="1"/>
                </row>
                <row r="2" spans="1:2">
                    <c r="A2" s="2" t="s">
                        <v>1</v>
                    </c>
                    <c r="B2" s="2" t="s">
                        <v>2</v>
                    </c>
                </row>
                <row r="3" spans="1:2">
                    <c r="A3" s="2">
                        <v>1</v>
                    </c>
                    <c r="B3" s="3" t="s">
                        <v>3</v>
                    </c>
                </row>
            </sheetData>
            <mergeCells count="1">
                <mergeCell ref="A1:B1"/>
            </mergeCells>
            <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
        </worksheet>`,
        sharedStrings: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
        <sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="4" uniqueCount="4">
            <si>
                <t>merge cell A1:B1</t>
            </si>
            <si>
                <t>no</t>
            </si>
            <si>
                <t>nama</t>
            </si>
            <si>
                <t>syuaib</t>
            </si>
        </sst>`,
        xlstyle: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
        <styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
            <fonts count="1">
                <font>
                    <sz val="11"/>
                    <color theme="1"/>
                    <name val="Calibri"/>
                    <family val="2"/>
                    <charset val="1"/>
                    <scheme val="minor"/>
                </font>
            </fonts>
            <fills count="2">
                <fill>
                    <patternFill patternType="none"/>
                </fill>
                <fill>
                    <patternFill patternType="gray125"/>
                </fill>
            </fills>
            <borders count="2">
                <border>
                    <left/>
                    <right/>
                    <top/>
                    <bottom/>
                    <diagonal/>
                </border>
                <border>
                    <left style="thin">
                        <color indexed="64"/>
                    </left>
                    <right style="thin">
                        <color indexed="64"/>
                    </right>
                    <top style="thin">
                        <color indexed="64"/>
                    </top>
                    <bottom style="thin">
                        <color indexed="64"/>
                    </bottom>
                    <diagonal/>
                </border>
            </borders>
            <cellStyleXfs count="1">
                <xf numFmtId="0" fontId="0" fillId="0" borderId="0"/>
            </cellStyleXfs>
            <cellXfs count="4">
                <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
                <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyAlignment="1">
                    <alignment horizontal="center"/>
                </xf>
                <xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyBorder="1" applyAlignment="1">
                    <alignment horizontal="center"/>
                </xf>
                <xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyBorder="1"/>
            </cellXfs>
            <cellStyles count="1">
                <cellStyle name="Normal" xfId="0" builtinId="0"/>
            </cellStyles>
            <dxfs count="0"/>
            <tableStyles count="0" defaultTableStyle="TableStyleMedium2" defaultPivotStyle="PivotStyleLight16"/>
        </styleSheet>`,
        xlworkbook: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
        <workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" 
            xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" >
            <fileVersion appName="xl" lastEdited="6" lowestEdited="6" rupBuild="14420"/>
            <workbookPr defaultThemeVersion="164011"/>
            <bookViews>
                <workbookView xWindow="0" yWindow="0" windowWidth="20490" windowHeight="7620"/>
            </bookViews>
            <sheets>
                <sheet name="Sheet1" sheetId="1" r:id="rId1"/>
            </sheets>
            <calcPr calcId="162913"/>
        </workbook>`,
        content_type: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
        <Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
            <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
            <Default Extension="xml" ContentType="application/xml"/>
            <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
            <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
            <Override PartName="/xl/theme/theme1.xml" ContentType="application/vnd.openxmlformats-officedocument.theme+xml"/>
            <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
            <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
        </Types>`
    };
    return l;
};