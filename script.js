const { jsPDF } = window.jspdf;

function generatePDF() {

const doc = new jsPDF({
orientation: "portrait",
unit: "mm",
format: [100,170]
});


// GET VALUES

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



// BORDER

doc.setLineWidth(.7);
doc.rect(3,3,94,162);


// HEADER

doc.setFont("helvetica","bold");
doc.setFontSize(22);

doc.text(
"VESPERA",
8,
15
);

doc.setFont("helvetica","normal");
doc.setFontSize(8);

doc.text("Anapparambil House",8,24);
doc.text("Arakkal HMC Road",8,30);
doc.text("Chalissery, Kerala - 679536",8,36);
doc.text("+91 8281088967",8,42);


// PAYMENT BOX

doc.setFillColor(0);

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

doc.setFontSize(8);

doc.text(
payment==="COD"
?
"CASH ON DELIVERY"
:
"PREPAID",
56,
13
);


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

doc.setFont(
"helvetica",
"bold"
);

doc.setFontSize(16);

doc.text(
`INR ${amount}`,
85,
30,
{align:"right"}
);

doc.setFontSize(8);

doc.text(
`ORDER ID : ${serial}`,
58,
42
);


// LINE

doc.line(
3,
47,
97,
47
);


// SELLER/CUSTOMER DIVIDER

doc.line(
50,
47,
50,
105
);


// SELLER HEADER

doc.setFillColor(0);

doc.roundedRect(
8,
52,
30,
7,
1,
1,
"F"
);

doc.setTextColor(255);

doc.text(
"FROM (SELLER)",
11,
57
);


// SHIP HEADER

doc.roundedRect(
55,
52,
20,
7,
1,
1,
"F"
);

doc.text(
"SHIP TO",
59,
57
);

doc.setTextColor(0);


// SELLER DETAILS

doc.setFont(
"helvetica",
"bold"
);

doc.setFontSize(14);

doc.text(
"VESPERA",
8,
70
);

doc.setFont(
"helvetica",
"normal"
);

doc.setFontSize(8);

doc.text(
[
"Anapparambil House",
"Arakkal HMC Road",
"Chalissery, Kerala - 679536"
],
8,
80
);

doc.setFont(
"helvetica",
"bold"
);

doc.text(
"PIN : 679536",
8,
95
);

doc.text(
"PH : +91 8281088967",
8,
102
);


// CUSTOMER DETAILS

doc.setFontSize(12);

let cname =
doc.splitTextToSize(
customer,
35
);

doc.text(
cname,
53,
70
);

doc.setFont(
"helvetica",
"normal"
);

doc.setFontSize(8);

let caddress =
doc.splitTextToSize(
`${address}, ${district}`,
35
);

doc.text(
caddress,
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
96
);

doc.text(
`PH : ${phone}`,
53,
103
);


// PRODUCT HEADER

doc.setFillColor(0);

doc.rect(
3,
110,
94,
9,
"F"
);

doc.setTextColor(255);

doc.text(
"PRODUCT / ITEM",
8,
116
);

doc.text(
"QTY",
70,
116
);

doc.text(
"AMOUNT",
80,
116
);


// PRODUCT ROW

doc.setTextColor(0);

doc.setFontSize(10);

let prod =
doc.splitTextToSize(
product,
40
);

doc.text(
prod,
8,
128
);

doc.text(
"1",
72,
128
);

doc.text(
`INR ${amount}`,
92,
128,
{align:"right"}
);

doc.line(
8,
132,
92,
132
);


// TOTAL

doc.setFont(
"helvetica",
"bold"
);

doc.setFontSize(14);

doc.text(
"ORDER TOTAL",
8,
143
);

doc.setFontSize(16);

doc.text(
`INR ${amount}`,
92,
143,
{align:"right"}
);

doc.line(
3,
147,
97,
147
);


// RETURN + THANK YOU

doc.line(
50,
147,
50,
160
);

doc.setFontSize(8);

doc.text(
"RETURN ADDRESS",
8,
152
);

doc.setFont(
"helvetica",
"normal"
);

doc.setFontSize(5);

doc.text(
[
"Muhammed Sufiyan",
"Mobile :8281088967",
"Address :Anapparambil House",
"State : Kerala",
"Pincode : 679536",
"Area : Arakkal HMC Road",
"City : Chalissery"
],
8,
155,
{
maxWidth:38
}
);


// THANK YOU

doc.setFont(
"helvetica",
"bold"
);

doc.setFontSize(10);

doc.text(
"THANK YOU",
62,
152
);

doc.setFont(
"helvetica",
"normal"
);

doc.setFontSize(6);

doc.text(
"We deliver happiness!",
62,
157
);

doc.text(
"www.vespera.in",
62,
161
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
