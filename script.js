const { jsPDF } = window.jspdf;

function generatePDF(){

const doc = new jsPDF({
orientation:"portrait",
unit:"mm",
format:[100,170]
});


// INPUT VALUES

const customer=document.getElementById("customerName").value||"Customer";

const address=document.getElementById("address").value||"-";

const district=document.getElementById("district").value||"-";

const pin=document.getElementById("pincode").value||"-";

const phone=document.getElementById("phone").value||"-";

const product=document.getElementById("product").value||"Product";

const amount=document.getElementById("orderValue").value||"0";

const serial=document.getElementById("serial").value||"DS1";

const payment=
document.querySelector(
'input[name="payment"]:checked'
)?.value || "COD";



// OUTER BORDER

doc.setLineWidth(.7);
doc.rect(3,3,94,162);


// PAYMENT BOX

doc.setFillColor(0);

doc.roundedRect(
52,
8,
40,
8,
1,
1,
"F"
);

doc.setTextColor(255);

doc.setFont(
"helvetica",
"bold"
);

doc.setFontSize(8);

doc.text(
"CASH ON DELIVERY",
58,
13
);


// AMOUNT BOX

doc.setTextColor(0);

doc.roundedRect(
52,
18,
40,
18,
1,
1
);

doc.setFontSize(13);

doc.text(
`INR ${amount}`,
72,
28,
{align:"center"}
);


doc.setFontSize(5);

doc.text(
"three hundred ninety nine",
72,
33,
{align:"center"}
);


doc.setFontSize(8);

doc.text(
`ORDER ID : ${serial}`,
63,
40
);


doc.line(
3,
45,
97,
45
);


// MIDDLE DIVISION

doc.line(
50,
45,
50,
100
);


// SECTION TITLES

doc.setFillColor(0);

doc.roundedRect(
8,
50,
24,
6,
1,
1,
"F"
);

doc.roundedRect(
53,
50,
20,
6,
1,
1,
"F"
);

doc.setTextColor(255);

doc.setFontSize(7);

doc.text(
"FROM (SELLER)",
11,
54
);

doc.text(
"TO (BUYER)",
57,
54
);


doc.setTextColor(0);


// FROM SELLER

doc.setFont(
"helvetica",
"bold"
);

doc.setFontSize(11);

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
78
);


doc.setFont(
"helvetica",
"bold"
);

doc.text(
"PIN : 679536",
8,
92
);

doc.text(
"PH : +91 8281088967",
8,
98
);

doc.text(
"Customer id : 1265200969",
8,
104
);


// TO BUYER

doc.setFontSize(11);

let buyerName=
doc.splitTextToSize(
customer,
22
);

doc.text(
buyerName,
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
`${address}
Area : ${district}
City : malappuram`,
22
);


doc.text(
buyerAddress,
53,
82
);


doc.setFont(
"helvetica",
"bold"
);

doc.text(
`PIN : ${pin}`,
53,
98
);

doc.text(
`PH : ${phone}`,
53,
104
);


// PRODUCT HEADER

doc.setFillColor(0);

doc.rect(
3,
110,
94,
8,
"F"
);

doc.setTextColor(255);

doc.setFontSize(7);

doc.text(
"PRODUCT / ITEM",
8,
115
);

doc.text(
"QTY",
68,
115
);

doc.text(
"AMOUNT",
82,
115
);


doc.setTextColor(0);


// PRODUCT

doc.setFontSize(9);

doc.text(
product.toUpperCase(),
8,
128
);

doc.text(
"1",
70,
128
);

doc.text(
`INR ${amount}`,
82,
128
);


doc.line(
8,
132,
92,
132
);


// TOTAL

doc.setFontSize(11);

doc.text(
"ORDER TOTAL",
8,
145
);

doc.setFontSize(13);

doc.text(
`INR ${amount}`,
82,
145
);


doc.line(
3,
150,
97,
150
);


// RETURN + THANK YOU

doc.line(
50,
150,
50,
161
);


doc.setFontSize(7);

doc.text(
"RETURN ADDRESS",
8,
155
);


doc.setFontSize(5);

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
159
);


doc.setFontSize(8);

doc.text(
"THANK YOU",
63,
155
);


doc.setFontSize(6);

doc.text(
"We deliver happiness!",
63,
160
);

doc.text(
"www.vespera.in",
63,
165
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
