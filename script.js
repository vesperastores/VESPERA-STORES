const { jsPDF } = window.jspdf;

function generatePDF(){

const doc = new jsPDF({
orientation:"portrait",
unit:"mm",
format:[100,150]
});


// FORM VALUES

const customer =
document.getElementById("customerName").value || "Customer";

const address =
document.getElementById("address").value || "-";

const district =
document.getElementById("district").value || "-";

const pin =
document.getElementById("pincode").value || "-";

const phone =
document.getElementById("phone").value || "-";

const product =
document.getElementById("product").value || "Product";

const amount =
document.getElementById("orderValue").value || "0";

const serial =
document.getElementById("serial").value || "VS001";

const payment =
document.querySelector(
'input[name="payment"]:checked'
)?.value || "COD";



// OUTER BORDER

doc.setLineWidth(.8);
doc.rect(3,3,94,144);


// ================= HEADER

doc.setFont("helvetica","bold");
doc.setFontSize(22);

doc.text(
"VESPERA",
8,
16
);

doc.setFontSize(8);
doc.setFont("helvetica","normal");

doc.text(
"Chungathara, Nilambur",
10,
25
);

doc.text(
"Malappuram, Kerala - 679334",
10,
31
);

doc.text(
"+91 7025054109",
10,
37
);


// PAYMENT BOX

doc.setFillColor(0,0,0);

doc.roundedRect(
52,
8,
38,
8,
1,
1,
"F"
);

doc.setTextColor(255);

doc.setFontSize(9);

doc.setFont("helvetica","bold");

if(payment==="COD"){

doc.text(
"CASH ON DELIVERY",
57,
13
);

}
else{

doc.text(
"PREPAID ORDER",
59,
13
);

}


// AMOUNT BOX

doc.setTextColor(0);

doc.roundedRect(
52,
18,
38,
18,
1,
1
);

doc.setFontSize(22);

doc.text(
`INR ${amount}`,
88,
30,
{align:"right"}
);

doc.setFontSize(8);

doc.text(
`ORDER ID : ${serial}`,
60,
41
);

doc.line(
3,
45,
97,
45
);


// ================= SELLER + SHIP

doc.line(
50,
47,
50,
95
);


// SELLER HEADER

doc.setFillColor(0);

doc.roundedRect(
7,
50,
27,
7,
1,
1,
"F"
);

doc.setTextColor(255);

doc.setFontSize(8);

doc.text(
"FROM (SELLER)",
11,
55
);


// SHIP HEADER

doc.roundedRect(
53,
50,
20,
7,
1,
1,
"F"
);

doc.text(
"SHIP TO",
58,
55
);


// SELLER CONTENT

doc.setTextColor(0);

doc.setFontSize(14);

doc.text(
"VESPERA",
8,
68
);

doc.setFontSize(8);

doc.text(
"Chungathara, Nilambur",
8,
79
);

doc.text(
"Malappuram, Kerala - 679334",
8,
85
);

doc.text(
"PIN: 679334",
8,
92
);


// CUSTOMER

doc.setFont("helvetica","bold");

const cname=
doc.splitTextToSize(
customer,
32
);

doc.text(
cname,
53,
68
);

doc.setFont(
"helvetica",
"normal"
);

const caddress=
doc.splitTextToSize(
`${address}, ${district}`,
30
);

doc.text(
caddress,
53,
79
);

doc.setFont(
"helvetica",
"bold"
);

doc.text(
`PIN: ${pin}`,
53,
92
);

doc.text(
`PH: ${phone}`,
53,
98
);


// ================= PRODUCT TABLE

doc.line(
3,
101,
97,
101
);

doc.setFillColor(
0
);

doc.rect(
3,
101,
94,
9,
"F"
);

doc.setTextColor(
255
);

doc.setFontSize(
8
);

doc.text(
"PRODUCT / ITEM",
8,
107
);

doc.text(
"QTY",
68,
107
);

doc.text(
"AMOUNT",
80,
107
);


// PRODUCT ROW

doc.setTextColor(
0
);

doc.setFontSize(
10
);

const p=
doc.splitTextToSize(
product,
42
);

doc.text(
p,
8,
121
);

doc.text(
"1",
70,
121
);

doc.text(
`INR ${amount}`,
89,
121,
{align:"right"}
);

doc.line(
8,
125,
92,
125
);


// ================= TOTAL

doc.line(
3,
128,
97,
128
);

doc.setFontSize(
12
);

doc.setFont(
"helvetica",
"bold"
);

doc.text(
"ORDER TOTAL",
8,
138
);

doc.setFontSize(
20
);

doc.text(
`INR ${amount}`,
90,
138,
{align:"right"}
);


// ================= RETURN SECTION

doc.line(
3,
142,
97,
142
);

doc.setFontSize(
8
);

doc.text(
"RETURN ADDRESS",
8,
148
);


// SAVE

doc.save(
`shipping-label-${serial}.pdf`
);

}
