const { jsPDF } = window.jspdf;

function generatePDF(){

    const customerName =
    document.getElementById("customerName").value;

    const address =
    document.getElementById("address").value;

    const district =
    document.getElementById("district").value;

    const pincode =
    document.getElementById("pincode").value;

    const phone =
    document.getElementById("phone").value;

    const serial =
    document.getElementById("serial").value;

    const product =
    document.getElementById("product").value;

    const orderValue =
    document.getElementById("orderValue").value;

    const payment =
    document.querySelector(
    'input[name="payment"]:checked'
    ).value;

    const doc = new jsPDF({
        orientation:"portrait",
        unit:"in",
        format:[4,6]
    });

    // BACKGROUND

    doc.setFillColor(255,255,255);
    doc.rect(0,0,4,6,"F");

    // OUTER BORDER

    doc.setDrawColor(0);
    doc.setLineWidth(0.03);
    doc.rect(0.08,0.08,3.84,5.84);

    // HEADER

    doc.setFillColor(20,20,20);
    doc.rect(0.08,0.08,3.84,0.7,"F");

    doc.setTextColor(200,169,107);

    doc.setFont("helvetica","bold");
    doc.setFontSize(22);

    doc.text("VESPERA",1.05,0.5);

    doc.setTextColor(255,255,255);

    doc.setFontSize(10);

    doc.text("THERMAL SHIPPING LABEL",1.02,0.68);

    // PAYMENT BOX

    if(payment === "COD"){

        doc.setFillColor(0,0,0);

        doc.rect(0.2,0.95,3.6,0.5,"F");

        doc.setTextColor(255,255,255);

        doc.setFontSize(22);

        doc.text(
        `COD ₹${orderValue}`,
        1.1,
        1.28
        );

    }else{

        doc.setFillColor(30,30,30);

        doc.rect(0.2,0.95,3.6,0.5,"F");

        doc.setTextColor(255,255,255);

        doc.setFontSize(20);

        doc.text(
        `PREPAID`,
        1.35,
        1.28
        );

    }

    // SHIP TO SECTION

    doc.setTextColor(0,0,0);

    doc.setDrawColor(0);

    doc.rect(0.2,1.65,3.6,1.6);

    doc.setFontSize(11);

    doc.setFont("helvetica","bold");

    doc.text("SHIP TO",0.32,1.88);

    doc.setFontSize(18);

    doc.text(customerName,0.32,2.2);

    doc.setFontSize(13);

    doc.text(phone,0.32,2.45);

    doc.setFont("helvetica","normal");

    doc.setFontSize(12);

    const splitAddress =
    doc.splitTextToSize(
    `${address}, ${district} - ${pincode}`,
    3.1
    );

    doc.text(splitAddress,0.32,2.75);

    // ORDER DETAILS

    doc.rect(0.2,3.45,3.6,1.0);

    doc.setFont("helvetica","bold");

    doc.setFontSize(11);

    doc.text("ORDER DETAILS",0.32,3.68);

    doc.setFont("helvetica","normal");

    doc.setFontSize(12);

    doc.text(
    `Serial No : ${serial}`,
    0.32,
    3.98
    );

    doc.text(
    `Product : ${product}`,
    0.32,
    4.25
    );

    // BARCODE PLACEHOLDER

    doc.rect(0.45,4.65,3.0,0.6);

    doc.setFont("helvetica","bold");

    doc.setFontSize(14);

    doc.text(
    "* SHIPPING BARCODE *",
    0.78,
    5.03
    );

    // RETURN ADDRESS

    doc.setFontSize(8);

    doc.setFont("helvetica","normal");

    doc.text(
    "RETURN: VESPERA, Chungathara, Nilambur, Kerala - 679334",
    0.22,
    5.55
    );

    // SAVE PDF

    doc.save("vespera-label.pdf");

}
