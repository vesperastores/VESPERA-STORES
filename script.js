// INPUTS
const customer=document.getElementById("customerName").value || "Customer";
const address=document.getElementById("address").value || "-";
const pin=document.getElementById("pincode").value || "-";
const phone=document.getElementById("phone").value || "-";
const product=document.getElementById("product").value || "Product";
const amount=document.getElementById("orderValue").value || "0";
const serial=document.getElementById("serial").value || "DS1";

const payment=document.querySelector(
'input[name="payment"]:checked'
)?.value || "COD";


// BORDER
doc.setLineWidth(0.7);
doc.rect(3,3,94,162);


// PAYMENT BOX
doc.setFillColor(0);
doc.roundedRect(55,8,37,8,1,1,"F");

doc.setTextColor(255);
doc.setFont("helvetica","bold");
doc.setFontSize(8);

doc.text(
payment==="COD" ?
"CASH ON DELIVERY" :
"PREPAID",
73,
13,
{align:"center"}
);


// RESET COLOR
doc.setTextColor(0);


// AMOUNT BOX
doc.roundedRect(55,18,37,18,1,1);

doc.setFontSize(14);

doc.text(
`INR ${amount}`,
73,
28,
{align:"center"}
);


// ORDER ID
doc.setFontSize(8);

doc.text(
`ORDER ID : ${serial}`,
73,
40,
{align:"center"}
);

doc.line(3,45,97,45);


// DIVIDER
doc.line(50,57,50,100);


// FROM LABEL
doc.setFillColor(0);

doc.roundedRect(
8,50,32,7,1,1,"F"
);

doc.setTextColor(255);

doc.text(
"FROM (SELLER)",
24,
55,
{align:"center"}
);


// TO LABEL
doc.roundedRect(
56,50,30,7,1,1,"F"
);

doc.text(
"TO (BUYER)",
71,
55,
{align:"center"}
);

doc.setTextColor(0);


// SELLER DETAILS

doc.setFont("helvetica","bold");
doc.setFontSize(12);

doc.text(
"SUFIYAN",
8,
68
);

doc.setFont("helvetica","normal");

doc.setFontSize(6);

doc.text(
[
"Anapparambil House",
"Arakkal HMC Road",
"Chalissery, Kerala - 679536"
],
8,
77
);

doc.setFont("helvetica","bold");

doc.text("PIN : 679536",8,90);

doc.text("PH : +91 8281088967",8,96);

doc.text("Customer id : 1265200969",8,102);


// BUYER DETAILS

doc.setFontSize(11);

doc.text(
customer,
56,
68
);

doc.setFont("helvetica","normal");

doc.setFontSize(6);

let buyerAddress=
doc.splitTextToSize(
address,
22
);

doc.text(
buyerAddress,
56,
80
);

doc.setFont("helvetica","bold");

doc.text(
`PIN : ${pin}`,
56,
95
);

doc.text(
`PH : ${phone}`,
56,
101
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
72,
111
);

doc.text(
"AMOUNT",
85,
111
);


// PRODUCT ROW

doc.setTextColor(0);

doc.setFontSize(10);

doc.text(
product.toUpperCase(),
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
{align:"right"}
);

doc.line(
8,
128,
92,
128
);


// TOTAL

doc.setFontSize(13);

doc.text(
"ORDER TOTAL",
8,
140
);

doc.text(
`INR ${amount}`,
95,
140,
{align:"right"}
);

doc.line(
3,
144,
97,
144
);


// RETURN

doc.line(
50,
144,
50,
160
);

doc.setFontSize(8);

doc.text(
"RETURN ADDRESS",
8,
149
);

doc.text(
"THANK YOU",
63,
149
);

doc.setFont("helvetica","normal");

doc.setFontSize(4.5);

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
152
);

doc.setFontSize(6);

doc.text(
"We deliver happiness!",
63,
155
);

doc.text(
"www.vespera.in",
63,
159
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

doc.save(
`shipping-label-${serial}.pdf`
);

}
