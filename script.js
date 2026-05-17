const { jsPDF } = window.jspdf;

function generatePDF() {

    // =========================
    // GET FORM VALUES
    // =========================

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

    // =========================
    // PDF SIZE
    // =========================

    const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: [100,150]
    });

    // =========================
    // PAGE
    // =========================

    doc.setFillColor(255,255,255);
    doc.rect(0,0,100,150,"F");

    doc.setDrawColor(0);
    doc.setLineWidth(0.8);

    // OUTER BORDER

    doc.rect(4,4,92,142);

    // =========================
    // HEADER SECTION
    // =========================

    doc.setFont("helvetica","bold");

    doc.setFontSize(22);

    doc.text("VESPERA",8,15);

    doc.setFont("helvetica","normal");

    doc.setFontSize(8);

    doc.text(
    "Chungathara, Nilambur",
    8,
    22
    );

    doc.text(
    "Malappuram, Kerala - 679334",
    8,
    27
    );

    doc.text(
    "+91 7025054109",
    8,
    32
    );

    // PAYMENT BOX

    doc.setFillColor(0,0,0);

    doc.roundedRect(
    52,
    8,
    38,
    8,
    1,
    1,
    "F"
    );

    doc.setTextColor(255,255,255);

    doc.setFontSize(10);

    doc.setFont("helvetica","bold");

    if(payment === "COD"){

        doc.text(
        "CASH ON DELIVERY",
        56,
        13
        );

    }else{

        doc.text(
        "PREPAID ORDER",
        59,
        13
        );

    }

    // AMOUNT BOX

    doc.setTextColor(0,0,0);

    doc.roundedRect(
    52,
    19,
    38,
    18,
    1,
    1
    );

    doc.setFontSize(24);

    doc.setFont("helvetica","bold");

    doc.text(
    `₹${orderValue}`,
    60,
    31
    );

    // ORDER ID

    doc.setFontSize(8);

    doc.setFont("helvetica","normal");

    doc.text(
    `ORDER ID : ${serial}`,
    56,
    42
    );

    // DIVIDER

    doc.line(4,46,96,46);

    // =========================
    // ADDRESS AREA
    // =========================

    // LEFT

    doc.line(50,46,50,102);

    // FROM HEADER

    doc.setFillColor(0,0,0);

    doc.roundedRect(
    8,
    50,
    28,
    7,
    1,
    1,
    "F"
    );

    doc.setTextColor(255,255,255);

    doc.setFont("helvetica","bold");

    doc.setFontSize(9);

    doc.text(
    "FROM (SELLER)",
    11,
    55
    );

    // FROM CONTENT

    doc.setTextColor(0,0,0);

    doc.setFontSize(16);

    doc.text(
    "VESPERA",
    8,
    67
    );

    doc.setFont("helvetica","normal");

    doc.setFontSize(8);

    doc.text(
    "Chungathara, Nilambur",
    8,
    77
    );

    doc.text(
    "Malappuram, Kerala - 679334",
    8,
    82
    );

    doc.setFont("helvetica","bold");

    doc.text(
    "PIN: 679334",
    8,
    91
    );

    doc.text(
    "PH: +91 7025054109",
    8,
    98
    );

    // =========================
    // SHIP TO
    // =========================

    doc.setFillColor(0,0,0);

    doc.roundedRect(
    54,
    50,
    20,
    7,
    1,
    1,
    "F"
    );

    doc.setTextColor(255,255,255);

    doc.setFontSize(9);

    doc.text(
    "SHIP TO",
    58,
    55
    );

    // CUSTOMER NAME

    doc.setTextColor(0,0,0);

    doc.setFont("helvetica","bold");

    doc.setFontSize(15);

    const splitName =
    doc.splitTextToSize(
    customerName,
    30
    );

    doc.text(
    splitName,
    54,
    67
    );

    // ADDRESS

    doc.setFont("helvetica","normal");

    doc.setFontSize(8);

    const splitAddress =
    doc.splitTextToSize(
    `${address}, ${district}`,
    26
    );

    doc.text(
    splitAddress,
    54,
    78
    );

    // PIN + PHONE

    doc.setFont("helvetica","bold");

    doc.text(
    `PIN: ${pincode}`,
    54,
    92
    );

    doc.text(
    `PH: ${phone}`,
    54,
    99
    );

    // =========================
    // PRODUCT SECTION
    // =========================

    doc.line(4,106,96,106);

    doc.setFillColor(0,0,0);

    doc.rect(
    4,
    106,
    92,
    9,
    "F"
    );

    doc.setTextColor(255,255,255);

    doc.setFontSize(9);

    doc.text(
    "PRODUCT / ITEM",
    8,
    112
    );

    doc.text(
    "QTY",
    68,
    112
    );

    doc.text(
    "AMOUNT",
    80,
    112
    );

    // PRODUCT ROW

    doc.setTextColor(0,0,0);

    doc.setFont("helvetica","bold");

    doc.setFontSize(11);

    const splitProduct =
    doc.splitTextToSize(
    product,
    40
    );

    doc.text(
    splitProduct,
    8,
    124
    );

    doc.text(
    "1",
    70,
    124
    );

    doc.text(
    `₹${orderValue}`,
    80,
    124
    );

    // TOTAL SECTION

    doc.line(4,130,96,130);

    doc.setFontSize(14);

    doc.text(
    "ORDER TOTAL",
    8,
    140
    );

    doc.setFontSize(24);

    doc.text(
    `₹${orderValue}`,
    72,
    140
    );

    // SAVE PDF

    doc.save(
    `shipping-label-${serial}.pdf`
    );

}
