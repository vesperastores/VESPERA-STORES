const { jsPDF } = window.jspdf;

function generatePDF() {

const doc = new jsPDF({
orientation:"portrait",
unit:"mm",
format:[100,170]
});

// INPUTS
const customer=document.getElementById("customerName").value||"Customer";
const address=document.getElementById("address").value||"-";
const district=document.getElementById("district").value||"-";
const pin=document.getElementById("pincode").value||"-";
const phone=document.getElementById("phone").value||"-";
const product=document.getElementById("product").value||"Product";
const amount=document.getElementById("orderValue").value||"0";
const serial=document.getElementById("serial").value||"DS1";

const payment=document.querySelector(
'input[name="payment"]:checked'
)?.value || "COD";


// AMOUNT WORDS
function amountWords(n){

const ones=["","one","two","three","four","five","six","seven","eight","nine"];

const teens=["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];

const tens=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];

n=parseInt(n);

if(n<10) return ones[n];

if(n<20) return teens[n-10];

if(n<100)
return tens[Math.floor(n/10)]+" "+ones[n%10];

if(n<1000)
return ones[Math.floor(n/100)]+" hundred "+
(
n%100?amountWords(n%100):""
);

return n;
}

let words=amountWords(amount);


// BORDER
doc.setLineWidth(.7);
doc.rect(3,3,94,162);


// PAYMENT BOX
doc.setFillColor(0);
doc.roundedRect(55,8,37,8,1,1,"F");

doc.setTextColor(255);
doc.setFontSize(8);

doc.text(
payment==="COD"
?"CASH ON DELIVERY"
:"PREPAID",
60,
13
);


// PRICE BOX
doc.setTextColor(0);

doc.roundedRect(55,18,37,18,1,1);

doc.setFontSize(14);

doc.setFont("helvetica","bold");

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
60,
40
);

doc.line(3,45,97,45);


// CENTER SECTION
doc.line(50,45,50,100);


// FROM LABEL
doc.setFillColor(0);

doc.roundedRect(8,50,28,7,1,1,"F");

doc.setTextColor(255);

doc.text(
"FROM (SELLER)",
11,
55
);


// TO LABEL
doc.roundedRect(53,50,20,7,1,1,"F");

doc.text(
"TO (BUYER)",
57,
55
);

doc.setTextColor(0);


// FROM DETAILS

doc.setFontSize(12);

doc.setFont("helvetica","bold");

doc.text(
"SUFIYAN",
8,
68
);

doc.setFontSize(7);

doc.setFont("helvetica","normal");

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
53,
68
);

doc.setFont("helvetica","normal");

doc.setFontSize(6);

// FIXED ADDRESS (NO DUPLICATE DISTRICT)

let buyerAddress=
doc.splitTextToSize(
address,
28
);

doc.text(
buyerAddress,
53,
80
);

doc.setFont("helvetica","bold");

doc.text(
`PIN : ${pin}`,
53,
93
);

doc.text(
`PH : ${phone}`,
53,
99
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
85,
124
);

doc.line(
8,
128,
92,
128
);


// TOTAL

doc.setFontSize(12);

doc.text(
"ORDER TOTAL",
8,
140
);

doc.setFontSize(16);

doc.text(
`INR ${amount}`,
82,
140
);

doc.line(
3,
144,
97,
144
);


// RETURN + THANK YOU

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
153
);

doc.text(
"We deliver happiness!",
63,
155
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

doc.save(
`shipping-label-${serial}.pdf`
);

}
