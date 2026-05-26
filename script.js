const { jsPDF } = window.jspdf;

function generatePDF(){

const doc = new jsPDF({
    orientation:"portrait",
    unit:"mm",
    format:[100,170]
});

// INPUTS
const customer=document.getElementById("customerName").value || "Customer";
const address=document.getElementById("address").value || "-";
const pin=document.getElementById("pincode").value || "-";
const phone=document.getElementById("phone").value || "-";
const product=document.getElementById("product").value || "Product";
const amount=document.getElementById("orderValue").value || "0";
const serial=document.getElementById("serial").value || "DS1";


// OUTER BORDER
doc.setLineWidth(.7);
doc.rect(3,3,94,162);


// PAYMENT BOX
doc.setFillColor(0);
doc.roundedRect(55,8,37,8,1,1,"F");

doc.setTextColor(255);
doc.setFontSize(8);

doc.text(
"CASH ON DELIVERY",
73.5,
13,
{align:"center"}
);


// PRICE BOX
doc.setTextColor(0);

doc.roundedRect(55,18,37,18,1,1);

doc.setFontSize(14);
doc.setFont("helvetica","bold");

doc.text(
`INR ${amount}`,
73.5,
28,
{align:"center"}
);


// ORDER ID
doc.setFontSize(8);

doc.text(
`ORDER ID : ${serial}`,
73.5,
40,
{align:"center"}
);


// DIVIDERS
doc.line(3,45,97,45);
doc.line(50,45,50,100);


// LABELS
doc.setFillColor(0);

doc.roundedRect(8,50,32,7,1,1,"F");
doc.roundedRect(54,50,32,7,1,1,"F");

doc.setTextColor(255);

doc.setFontSize(7);

doc.text(
"FROM (SELLER)",
24,
55,
{align:"center"}
);

doc.text(
"TO (BUYER)",
70,
55,
{align:"center"}
);

doc.setTextColor(0);


// SELLER DETAILS
doc.setFontSize(11);

doc.setFont("helvetica","bold");

doc.text(
"SUFIYAN",
8,
68
);

doc.setFontSize(6);

doc.setFont("helvetica","normal");

doc.text(
[
"Anapparambil House",
"Arakkal HMC Road",
"Chalissery, Kerala - 679536"
],
8,
78
);

doc.setFont("helvetica","bold");

doc.text(
"PIN : 679536",
8,
91
);

doc.text(
"PH : +91 8281088967",
8,
97
);

doc.text(
"Customer id : 1265200969",
8,
103
);


// BUYER DETAILS
doc.setFontSize(11);

doc.text(
customer,
54,
68
);

doc.setFontSize(6);

doc.setFont("helvetica","normal");

let buyerAddress=
doc.splitTextToSize(
address,
30
);

doc.text(
buyerAddress,
54,
80
);

doc.setFont("helvetica","bold");

doc.text(
`PIN : ${pin}`,
54,
92
);

doc.text(
`PH : ${phone}`,
54,
98
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
82,
111
);


// PRODUCT ROW
doc.setTextColor(0);

doc.setFontSize(10);

doc.text(
product.toUpperCase(),
8,
125
);

doc.text(
"1",
72,
125
);

doc.text(
`INR ${amount}`,
82,
125
);


// LINE
doc.line(
8,
130,
92,
130
);


// ORDER TOTAL
doc.setFontSize(11);

doc.setFont("helvetica","bold");

doc.text(
"ORDER TOTAL",
8,
140
);

doc.setFontSize(14);

doc.text(
`INR ${amount}`,
82,
140
);


// DIVIDER
doc.line(
3,
145,
97,
145
);

doc.line(
50,
145,
50,
160
);


// RETURN ADDRESS
doc.setFontSize(8);

doc.text(
"RETURN ADDRESS",
8,
150
);

doc.setFontSize(5);

doc.setFont("helvetica","normal");

doc.text(
[
"Name : Muhammed Sufiyan",
"Mobile : 8281088967",
"Address : Anapparambil House",
"State : Kerala",
"Pincode : 679536",
"Area : Arakkal HMC Road",
"City : Chalissery"
],
8,
154
);


// THANK YOU
doc.setFontSize(8);

doc.setFont("helvetica","bold");

doc.text(
"THANK YOU",
63,
150
);

doc.setFontSize(6);

doc.setFont("helvetica","normal");

doc.text(
"We deliver happiness!",
63,
156
);

doc.text(
"www.vespera.in",
63,
160
);


// FOOTER
doc.setFillColor(0);

doc.rect(
3,
161,
94,
4,
"F"
);


// SAVE PDF
doc.save(
`shipping-label-${serial}.pdf`
);

}
