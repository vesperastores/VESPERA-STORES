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

// TOP LINE
doc.line(3,45,97,45);

// LABELS
doc.setFillColor(0);

doc.roundedRect(8,50,32,7,1,1,"F");
doc.roundedRect(56,50,30,7,1,1,"F");

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
71,
55,
{align:"center"}
);

doc.setTextColor(0);

// SELLER
doc.setFontSize(11);

doc.text(
"SUFIYAN",
8,
68
);

// BUYER
doc.text(
customer,
56,
68
);

// PRODUCT
doc.text(
product,
8,
120
);

doc.text(
`INR ${amount}`,
95,
120,
{align:"right"}
);

doc.save(`shipping-label-${serial}.pdf`);

}
