const { jsPDF } = window.jspdf;

function generatePDF(){

const doc = new jsPDF({
orientation:"portrait",
unit:"mm",
format:[100,170]
});

// VALUES

const customer=document.getElementById("customerName").value||"Customer";

const address=document.getElementById("address").value||"-";

const district=document.getElementById("district").value||"-";

const pin=document.getElementById("pincode").value||"-";

const phone=document.getElementById("phone").value||"-";

const product=document.getElementById("product").value||"Product";

const amount=document.getElementById("orderValue").value||"0";

const serial=document.getElementById("serial").value||"VS001";

const payment=
document.querySelector(
'input[name="payment"]:checked'
)?.value || "COD";


// OUTER BORDER

doc.setLineWidth(.7);
doc.rect(3,3,94,162);


// HEADER

doc.setFont("helvetica","bold");
doc.setFontSize(22);
doc.text("SUFIYAN",8,15);

doc.setFont("helvetica","normal");
doc.setFontSize(8);

doc.text("Anapparambil House,",8,24);
doc.text("Arakkal,HMC Road,",8,24);
doc.text("Chalissery, Kerala - 679536",8,29);
doc.text("+91 8281088962",8,35);


// PAYMENT

doc.setFillColor(0,0,0);

doc.roundedRect(52,8,40,8,1,1,"F");

doc.setTextColor(255);

doc.setFontSize(9);

doc.text(
payment==="COD"
?"CASH ON DELIVERY"
:"PREPAID ORDER",
56,
13
);


// AMOUNT BOX

doc.setTextColor(0);

doc.roundedRect(52,18,40,18,1,1);

doc.setFontSize(18);

doc.text(
`INR ${amount}`,
88,
30,
{align:"right"}
);

doc.setFontSize(8);

doc.text(
`ORDER ID : ${serial}`,
58,
40
);

doc.line(3,45,97,45);


// SELLER / SHIP

doc.line(50,45,50,100);

doc.setFillColor(0);

doc.roundedRect(8,50,28,7,1,1,"F");

doc.setTextColor(255);

doc.setFontSize(8);

doc.text(
"FROM (SELLER)",
11,
55
);

doc.roundedRect(53,50,20,7,1,1,"F");

doc.text(
"SHIP TO",
58,
55
);

doc.setTextColor(0);


// SELLER CONTENT

doc.setFontSize(14);

doc.text(
"VESPERA",
8,
68
);

doc.setFontSize(8);

doc.text(
"Anapparabil House",
"Arakkal,HMC Road"
8,
77
);

doc.text(
"Chalissery, Kerala - 679536",
8,
83
);

doc.text(
"PIN: 679536",
8,
90
);

doc.text(
"PH: +91 8281088967",
8,
96
);


// CUSTOMER CONTENT

doc.setFont("helvetica","bold");

doc.setFontSize(13);

let name=
doc.splitTextToSize(customer,30);

doc.text(name,53,68);

doc.setFont("helvetica","normal");

doc.setFontSize(8);

let addr=
doc.splitTextToSize(
`${address}, ${district}`,
28
);

doc.text(addr,53,78);

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


// PRODUCT ROW

doc.setTextColor(0);

doc.setFontSize(10);

let prod=
doc.splitTextToSize(product,40);

doc.text(
prod,
8,
123
);

doc.text(
"1",
70,
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

doc.setFontSize(20);

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

doc.setFont("helvetica","normal");

doc.setFontSize(7);

doc.text(
[
"SUFIYAN",
"Anapparambil House",
"Arakkal,HMC Road"
"Chalissery, Kerala - 679536"
],
8,
154
);

doc.setFont("helvetica","bold");

doc.setFontSize(10);

doc.text(
"THANK YOU",
63,
149
);

doc.setFont("helvetica","normal");

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
