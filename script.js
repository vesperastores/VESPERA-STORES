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

    doc.setFontSize(22);

    doc.text("VESPERA",1.2,0.5);

    doc.setFontSize(12);

    doc.text(`Customer: ${customerName}`,0.2,1.2);

    doc.text(`Phone: ${phone}`,0.2,1.5);

    doc.text(`Address: ${address}`,0.2,1.9);

    doc.text(`${district} - ${pincode}`,0.2,2.4);

    doc.text(`Product: ${product}`,0.2,3);

    doc.text(`Serial: ${serial}`,0.2,3.4);

    doc.text(`Payment: ${payment}`,0.2,3.8);

    doc.text(`Value: ₹${orderValue}`,0.2,4.2);

    doc.save("vespera-label.pdf");
}