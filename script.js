const { jsPDF } = window.jspdf;

function generatePDF(){

const doc = new jsPDF({
orientation:"portrait",
unit:"mm",
format:[100,170]
});

const customer=document.getElementById("customerName").value || "Customer";
const address=document.getElementById("address").value || "-";
const pin=document.getElementById("pincode").value || "-";
const phone=document.getElementById("phone").value || "-";
const product=document.getElementById("product").value || "Product";
const amount=document.getElementById("orderValue").value || "0";
const serial=document.getElementById("serial").value || "DS1";


// BORDER
doc.rect(3,3,94,162);


// PAYMENT BOX
doc.setFillColor(0);

doc.roundedRect(
55,
8,
35,
8,
1,
1,
"F"
);

doc.setTextColor(255);

doc.setFontSize(8);

doc.text(
"CASH ON DELIVERY",
72,
13,
{
align:"center"
}
);


// RESET
doc.setTextColor(0);


// AMOUNT BOX

doc.roundedRect(
55,
18,
35,
18,
1,
1
);

doc.setFontSize(14);

doc.text(
`INR ${amount}`,
72,
29,
{
align:"center"
}
);


// ORDER ID

doc.setFontSize(8);

doc.text(
`ORDER ID : ${serial}`,
72,
40,
{
align:"center"
}
);


// TOP LINE

doc.line(
3,
45,
97,
45
);


// MIDDLE DIVIDER

doc.line(
50,
57,
50,
100
);


// LABELS

doc.setFillColor(0);

doc.roundedRect(
8,
50,
32,
7,
1,
1,
"F"
);

doc.roundedRect(
56,
50,
30,
7,
1,
1,
"F"
);

doc.setTextColor(255);

doc.setFontSize(7);

doc.text(
"FROM (SELLER)",
24,
55,
{
align:"center"
}
);

doc.text(
"TO (BUYER)",
71,
55,
{
align:"center"
}
);

doc.setTextColor(0);


// SELLER

doc.setFontSize(11);

doc.setFont(
"helvetica",
"bold"
);

doc.text(
"SUFIYAN",
8,
68
);

doc.setFontSize(6);

doc.setFont(
"helvetica",
"normal"
);

doc.text(
[
"Anapparambil House",
"Arakkal HMC Road",
"Chalissery"
],
8,
77
);

doc.setFont(
"helvetica",
"bold"
);

doc.text(
"PIN : 679536",
8,
90
);

doc.text(
"PH : 8281088967",
8,
96
);


// BUYER

doc.setFontSize(11);

doc.text(
customer,
56,
68
);

doc.setFont(
"helvetica",
"normal"
);

doc.setFontSize(6);

let buyerAddress=
doc.splitTextToSize(
address,
20
);

doc.text(
buyerAddress,
56,
80
);

doc.setFont(
"helvetica",
"bold"
);

doc.text(
`PIN : ${pin}`,
56,
94
);

doc.text(
`PH : ${phone}`,
56,
100
);


// PRODUCT HEADER

doc.setFillColor(0);

doc.rect(
3,
106,
94,
8,
"F"
);

doc.setTextColor(255);

doc.text(
"PRODUCT / ITEM",
8,
111
);

doc.text(
"QTY",
70,
111
);

doc.text(
"AMOUNT",
83,
111
);


// PRODUCT ROW

doc.setTextColor(0);

doc.setFontSize(10);

doc.text(
product,
8,
124
);

doc.text(
"1",
72,
124
);

doc.text(
`INR ${amount}`,
95,
124,
{
align:"right"
}
);


doc.save(
`shipping-label-${serial}.pdf`
);

}
