// ================= TOTAL

doc.line(3,128,97,128);

doc.setFont("helvetica","bold");
doc.setFontSize(12);

doc.text(
"ORDER TOTAL",
8,
137
);

doc.setFontSize(22);

doc.text(
`INR ${amount}`,
90,
137,
{align:"right"}
);


// ================= RETURN + THANKYOU AREA

doc.line(
3,
141,
97,
141
);

// CENTER DIVIDER

doc.line(
50,
141,
50,
163
);


// LEFT BLOCK

doc.setFontSize(8);

doc.setFont(
"helvetica",
"bold"
);

doc.text(
"RETURN ADDRESS",
8,
147
);

doc.setFont(
"helvetica",
"normal"
);

doc.setFontSize(
7
);

doc.text(
[
"VESPERA,",
"Chungathara, Nilambur,",
"Malappuram, Kerala - 679334"
],
8,
153
);


// RIGHT BLOCK

doc.setFont(
"helvetica",
"bold"
);

doc.setFontSize(
10
);

doc.text(
"THANK YOU",
63,
147
);

doc.setFont(
"helvetica",
"normal"
);

doc.setFontSize(
7
);

doc.text(
"We deliver happiness!",
63,
154
);

doc.text(
"www.vespera.in",
63,
160
);


// ================= FOOTER STRIP

doc.setFillColor(
0
);

doc.rect(
3,
165,
94,
8,
"F"
);

doc.setTextColor(
255
);

doc.setFontSize(
7
);

doc.setFont(
"helvetica",
"bold"
);

doc.text(
"PLEASE DO NOT ACCEPT IF SEAL IS BROKEN",
50,
170,
{align:"center"}
);
