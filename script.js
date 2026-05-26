const { jsPDF } = window.jspdf;

function generatePDF(){

const doc = new jsPDF({
orientation:"portrait",
unit:"mm",
format:[100,170]
});

// INPUTS
const customer=document.getElementById("customerName").value||"Customer";
const address=document.getElementById("address").value||"-";
const pin=document.getElementById("pincode").value||"-";
const phone=document.getElementById("phone").value||"-";
const product=document.getElementById("product").value||"Product";
const amount=document.getElementById("orderValue").value||"0";
const serial=document.getElementById("serial").value||"DS1";

const payment=document.querySelector(
'input[name="payment"]:checked'
)?.value || "COD";


// NUMBER TO WORDS
function amountWords(n){

const ones=["","one","two","three","four","five","six","seven","eight","nine"];
const teens=["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
const tens=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];

n=parseInt(n);

if(n<10) return ones[n];

if(n<20) return teens[n-10];

if(n<100){
return tens[Math.floor(n/10)]+" "+ones[n%10];
}

if(n<1000){
return ones[Math.floor(n/100)]+" hundred " +
(n%100 ? amountWords(n%100):"");
}

return n;
}

let words=amountWords(amount);


// OUTER BORDER
doc.setLineWidth(.7);
doc.rect(3,3,94,162);


// PAYMENT
doc.setFillColor(0);

doc.roundedRect(
55,8,37,8,1,1,"F"
);

doc.setTextColor(255);

doc.setFontSize(8);

doc.text(
payment==="COD"
?"CASH ON DELIVERY"
:"PREPAID",
73,
13,
{align:"center"}
);


// PRICE BOX
doc.setTextColor(0);

doc.roundedRect(
55,18,37,18,1,1
);

doc.setFont(
"helvetica",
"bold"
);

doc.setFontSize(14);

doc.text(
`INR ${amount}`,
73,
28,
{align:"center"}
);

doc.setFontSize(4);

doc.text(
words,
73,
33,
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

doc.line(
3,
45,
97,
45
);


// CENTER LINE
doc.line(
50,
45,
50,
106
);


// FROM LABEL
doc.setFillColor(0);

doc.roundedRect(
8,
50,
28,
7,
1,
1,
"F"
);

doc.setTextColor(255);

doc.setFontSize(7);

doc.text(
"FROM (SELLER)",
22,
55,
{align:"center"}
);


// TO LABEL
doc.roundedRect(
53,
50,
28,
7,
1,
1,
"F"
);

doc.text(
"TO (BUYER)",
67,
55,
{align:"center"}
);

doc.setTextColor(0);


// SELLER DETAILS

doc.setFont(
"helvetica",
"bold"
);

doc.setFontSize(12);

doc.text(
"SUFIYAN",
8,
68
);

doc.setFont(
"helvetica",
"normal"
);

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
"PH : +91 8281088967",
8,
96
);

doc.text(
"Customer id : 1265200969",
8,
102
);


// BUYER DETAILS

doc.setFontSize(11);

doc.text(
customer,
53,
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
24
);

doc.text(
buyerAddress,
53,
80
);

doc.setFont(
"helvetica",
"bold"
);

doc.text(
`PIN : ${pin}`,
53,
94
);

doc.text(
`PH : ${phone}`,
53,
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

doc.setFontSize(15);

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


// RETURN SECTION

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

doc.setFontSize(4.5);

doc.setFont(
"helvetica",
"normal"
);

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
