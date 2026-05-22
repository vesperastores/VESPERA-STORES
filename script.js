const { jsPDF } = window.jspdf;

function generatePDF() {

const doc = new jsPDF({
orientation:"portrait",
unit:"mm",
format:[100,170]
});

const customer=document.getElementById("customerName").value||"Customer";

const address=document.getElementById("address").value||"-";

const district=document.getElementById("district").value||"-";

const pin=document.getElementById("pincode").value||"-";

const phone=document.getElementById("phone").value||"-";

const product=document.getElementById("product").value||"Product";

const amount=document.getElementById("orderValue").value||"0";

const serial=document.getElementById("serial").value||"VS001";

const payment=document.querySelector(
'input[name="payment"]:checked'
)?.value || "COD";


// OUTER BORDER

doc.setLineWidth(0.6);
doc.rect(3,3,94,162);


// HEADER

doc.setFont("helvetica","bold");
doc.setFontSize(24);

doc.text("VESPERA",8,15);

doc.setFontSize(8);
doc.setFont("helvetica","normal");

doc.text("Chungathara, Nilambur",8,25);
doc.text("Malappuram, Kerala - 679334",8,31);
doc.text("+91 7025054109",8,37);


// PAYMENT BOX

doc.setFillColor(0);

doc.roundedRect(52,8,40,8,1,1,"F");

doc.setTextColor(255);

doc.setFontSize(9);

doc.text(
payment==="COD"
?"CASH ON DELIVERY"
:"PREPAID",
56,
13
);


// AMOUNT BOX

doc.setTextColor(0);

doc.roundedRect(52,18,40,20,1,1);

doc.setFont("helvetica","bold");

doc.setFontSize(26);

doc.text(
`₹ ${amount}`,
88,
31,
{align:"right"}
);

doc.setFontSize(8);

doc.text(
`ORDER ID : ${serial}`,
58,
43
);

doc.line(3,47,97,47);


// SELLER / SHIP AREA

doc.line(50,47,50,102);


// FROM TITLE

doc.setFillColor(0);

doc.roundedRect(8,52,28,7,1,1,"F");

doc.setTextColor(255);

doc.text("FROM (SELLER)",11,57);


// SHIP TITLE

doc.roundedRect(53,52,20,7,1,1,"F");

doc.text("SHIP TO",58,57);

doc.setTextColor(0);


// SELLER

doc.setFontSize(14);

doc.setFont("helvetica","bold");

doc.text("VESPERA",8,70);

doc.setFontSize(8);

doc.setFont("helvetica","normal");

doc.text([
"Chungathara, Nilambur",
"Malappuram, Kerala - 679334"
],8,80);

doc.text("PIN : 679334",8,93);

doc.text("PH : +91 7025054109",8,100);


// CUSTOMER

doc.setFont("helvetica","bold");

doc.setFontSize(13);

let name=doc.splitTextToSize(customer,35);

doc.text(name,53,70);

doc.setFontSize(8);

doc.setFont("helvetica","normal");

let addr=doc.splitTextToSize(
`${address}, ${district}`,
35
);

doc.text(addr,53,80);

doc.setFont("helvetica","bold");

doc.text(`PIN : ${pin}`,53,94);

doc.text(`PH : ${phone}`,53,100);


// PRODUCT HEADER

doc.setFillColor(0);

doc.rect(3,106,94,9,"F");

doc.setTextColor(255);

doc.text("PRODUCT / ITEM",8,112);

doc.text("QTY",70,112);

doc.text("AMOUNT",80,112);


// PRODUCT

doc.setTextColor(0);

doc.setFontSize(10);

doc.text(product,8,124);

doc.text("1",72,124);

doc.text(`₹${amount}`,92,124,{align:"right"});

doc.line(8,128,92,128);


// TOTAL

doc.setFontSize(13);

doc.text("ORDER TOTAL",8,140);

doc.setFontSize(22);

doc.text(`₹${amount}`,92,140,{align:"right"});

doc.line(3,145,97,145);


// RETURN + THANK YOU

doc.line(50,145,50,160);

doc.setFontSize(9);

doc.text("RETURN ADDRESS",8,151);

doc.setFontSize(7);

doc.setFont("helvetica","normal");

doc.text([
"VESPERA",
"Chungathara, Nilambur",
"Malappuram, Kerala - 679334"
],8,156);


doc.setFont("helvetica","bold");

doc.setFontSize(10);

doc.text("THANK YOU",63,151);

doc.setFont("helvetica","normal");

doc.setFontSize(7);

doc.text("We deliver happiness!",63,156);

doc.text("www.vespera.in",63,160);


// FOOTER

doc.setFillColor(0);

doc.rect(3,161,94,4,"F");

doc.save(`shipping-label-${serial}.pdf`);

}
