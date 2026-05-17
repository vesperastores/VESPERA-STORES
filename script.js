const { jsPDF } = window.jspdf;

function generatePDF() {

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

    // 4x6 THERMAL SIZE

    const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: [150,100]
    });

    // BACKGROUND

    doc.setFillColor(255,255,255);
    doc.rect(0,0,100,150,"F");

    // OUTER BORDER

    doc.setLineWidth(0.8);
    doc.rect(3,3,94,144);

    // =========================
    // HEADER
    // =========================

    doc.setFont("helvetica","bold");

    doc.setFontSize(30);

    doc.text("VESPERA",8,18);

    doc.setFont("helvetica","normal");

    doc.setFontSize(10);

    doc.text(
    "Chungathara, Nilambur",
    8,
    28
    );

    doc.text(
    "Malappuram, Kerala - 679334",
    8,
    35
    );

    doc.text(
    "+91 7025054109",
    8,
    42
    );

    // PAYMENT HEADER

    doc.setFillColor(0,0,0);

    doc.roundedRect(
    50,
    8,
    40,
    10,
    2,
    2,
    "F"
    );

    doc.setTextColor(255,255,255);

    doc.setFontSize(12);

    doc.setFont("helvetica","bold");

    if(payment === "COD"){

        doc.text(
        "CASH ON DELIVERY",
        54,
        15
        );

    }else{

        doc.text(
        "PREPAID ORDER",
        58,
        15
        );

    }

    // AMOUNT BOX

    doc.setTextColor(0,0,0);

    doc.roundedRect(
    50,
    22,
    40,
    18,
    2,
    2
    );

    doc.setFontSize(30);

    doc.text(
    `₹${orderValue}`,
    58,
    34
    );

    // ORDER ID

    doc.setFontSize(9);

    doc.setFont("helvetica","normal");

    doc.text(
    `ORDER ID : ${serial}`,
    54,
    46
    );

    // DIVIDER

    doc.line(3,50,97,50);

    // =========================
    // FROM SELLER
    // =========================

    doc.setFillColor(0,0,0);

    doc.roundedRect(
    6,
    54,
    30,
    8,
    1,
    1,
    "F"
    );

    doc.setTextColor(255,255,255);

    doc.setFont("helvetica","bold");

    doc.setFontSize(11);

    doc.text(
    "FROM (SELLER)",
    9,
    59
    );

    doc.setTextColor(0,0,0);

    doc.setFontSize(18);

    doc.text(
    "VESPERA",
    8,
    73
    );

    doc.setFont("helvetica","normal");

    doc.setFontSize(10);

    doc.text(
    "Chungathara, Nilambur",
    8,
    84
    );

    doc.text(
    "Malappuram, Kerala - 679334",
    8,
    91
    );

    doc.setFont("helvetica","bold");

    doc.text(
    "PIN: 679334",
    8,
    102
    );

    doc.text(
    "PH: +91 7025054109",
    8,
    110
    );

    // CENTER DIVIDER

    doc.line(50,52,50,112);

    // =========================
    // SHIP TO
    // =========================

    doc.setFillColor(0,0,0);

    doc.roundedRect(
    54,
    54,
    22,
    8,
    1,
    1,
    "F"
    );

    doc.setTextColor(255,255,255);

    doc.setFont("helvetica","bold");

    doc.setFontSize(11);

    doc.text(
    "SHIP TO",
    58,
    59
    );

    doc.setTextColor(0,0,0);

    doc.setFontSize(18);

    doc.text(
    customerName,
    54,
    73
    );

    doc.setFont("helvetica","normal");

    doc.setFontSize(10);

    const splitAddress =
    doc.splitTextToSize(
    `${address}, ${district}`,
    32
    );

    doc.text(
    splitAddress,
    54,
    84
    );

    doc.setFont("helvetica","bold");

    doc.text(
    `PIN: ${pincode}`,
    54,
    102
    );

    doc.text(
    `PH: ${phone}`,
    54,
    110
    );

    // =========================
    // PRODUCT TABLE
    // =========================

    doc.line(3,118,97,118);

    doc.setFillColor(0,0,0);

    doc.rect(3,118,94,10,"F");

    doc.setTextColor(255,255,255);

    doc.setFont("helvetica","bold");

    doc.setFontSize(11);

    doc.text(
    "PRODUCT / ITEM",
    8,
    125
    );

    doc.text(
    "QTY",
    70,
    125
    );

    doc.text(
    "AMOUNT",
    82,
    125
    );

    // PRODUCT DATA

    doc.setTextColor(0,0,0);

    doc.setFontSize(14);

    doc.text(
    product,
    8,
    138
    );

    doc.text(
    "1",
    73,
    138
    );

    doc.text(
    `₹${orderValue}`,
    84,
    138
    );

    // =========================
    // TOTAL SECTION
    // =========================

    doc.line(3,142,97,142);

    doc.setFont("helvetica","bold");

    doc.setFontSize(16);

    doc.text(
    "ORDER TOTAL",
    8,
    154
    );

    doc.setFontSize(28);

    doc.text(
    `₹${orderValue}`,
    72,
    154
    );

    // =========================
    // SAVE
    // =========================

    doc.save(
    `shipping-label-${serial}.pdf`
    );

}
