const { jsPDF } = window.jspdf;

function numberToWords(num){
const ones=["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
const tens=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];

if(num<20) return ones[num];

if(num<100){
return tens[Math.floor(num/10)]+" "+ones[num%10];
}

if(num<1000){
return ones[Math.floor(num/100)]+" hundred "+numberToWords(num%100);
}

return num;
}

function generatePDF(){

const doc=new jsPDF({
orientation:"portrait",
unit:"mm",
format:[100,170]
});

// INPUT VALUES

const customer=document.getElementById("customerName").value || "Customer";

const address=document.getElementById("address").value || "-";

const district=document.getElementById("district").value || "-";

const pin=document.getElementById("pincode").value || "-";

const phone=document.getElementById("phone").value || "-";

const product=document.getElementById("product").value || "Product";

const amount=document.getElementById("orderValue").value || "0";

const serial=document.getElementById("serial").value || "DS1";

const payment=
document.querySelector(
'input[name="payment"]:checked'
)?.value || "COD";

const amountWords=numberToWords(parseInt(amount));


// BORDER

doc.setLineWidth(.6);
doc.rect(3,3,94,162);


// PAYMENT BOX

doc.setFillColor(0,0,0);

doc.roundedRect(52,8,40,8,1,1,"F");

doc.setTextColor(255);

doc.setFontSize(8);

doc.text(
payment==="COD" ?
"CASH ON DELIVERY" :
"PREPAID ORDER",
57,
13
);


// PRICE BOX

doc.setTextColor(0);

doc.roundedRect(
52,
18,
40,
18,
1,
1
);

doc.setFont(
"helvetica",
"bold"
);

doc.setFontSize(14);

doc.text(
`INR ${amount}`,
72,
28,
{align:"center"}
);

doc.setFontSize(5);

doc.text(
amountWords,
72,
34,
{align:"center"}
);


// ORDER ID

doc.setFontSize(8);

doc.text(
`ORDER ID : ${serial}`,
58,
40
);

doc.line(3,45,97,45);


// SELLER / BUYER

doc.line(50,45,50,100);

doc.setFillColor(0);

doc.roundedRect(8,50,28,7,1,1,"F");

doc.roundedRect(53,50,25,7,1,1,"F");

doc.setTextColor(255);

doc.setFontSize(8);

doc.text(
"FROM (SELLER)",
11,
55
);

doc.text(
"TO (BUYER)",
58,
55
);

doc.setTextColor(0);


// SELLER

doc.setFont(
"helvetica",
"bold"
);

doc.setFontSize(14);

doc.text(
"VESPERA",
8,
68
);

doc.setFont(
"helvetica",
"normal"
);

doc.setFontSize(7);

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


// BUYER SECTION
doc.setFont("helvetica", "bold");
doc.setFontSize(13);

doc.text(customer, 53, 68);

doc.setFont("helvetica", "normal");
doc.setFontSize(7);

// address
let buyerLines = doc.splitTextToSize(address, 28);
doc.text(buyerLines, 53, 82);

// move cursor properly
let y = 82 + (buyerLines.length * 4) + 4;

doc.setFont("helvetica", "bold");

doc.text(`PIN : ${pin}`, 53, y);

// move next line properly
y += 5;

doc.text(`PH : ${phone}`, 53, y);


// PRODUCT HEADER

doc.setFillColor(0);

doc.rect(
3,
105,
94,
9,
"F"
);

doc.setTextColor(255);

doc.setFontSize(8);

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
80,
111
);


// PRODUCT

doc.setTextColor(0);

doc.setFontSize(10);

doc.text(
product,
8,
123
);

doc.text(
"1",
72,
123
);

doc.text(
`INR ${amount}`,
92,
123,
{align:"right"}
);

doc.line(
8,
127,
92,
127
);


// TOTAL

doc.setFontSize(13);

doc.text(
"ORDER TOTAL",
8,
138
);

doc.setFontSize(16);

doc.text(
`INR ${amount}`,
92,
138,
{align:"right"}
);

doc.line(
3,
143,
97,
143
);


// RETURN + THANK YOU

doc.line(
50,
143,
50,
160
);

doc.setFontSize(8);

doc.text(
"RETURN ADDRESS",
8,
149
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
152
);


doc.setFontSize(10);

doc.text(
"THANK YOU",
63,
149
);

doc.setFontSize(7);

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
