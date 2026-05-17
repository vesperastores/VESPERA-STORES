const { jsPDF } = window.jspdf;

function generatePDF() {

    // =========================
    // GET VALUES
    // =========================

    const customerName =
    document.getElementById("customerName").value || "Customer";

    const address =
    document.getElementById("address").value || "-";

    const district =
    document.getElementById("district").value || "-";

    const pincode =
    document.getElementById("pincode").value || "-";

    const phone =
    document.getElementById("phone").value || "-";

    const serial =
    document.getElementById("serial").value || "VS001";

    const product =
    document.getElementById("product").value || "Product";

    const orderValue =
    document.getElementById("orderValue").value || "0";

    const payment =
    document.querySelector(
    'input[name="payment"]:checked'
    )?.value || "COD";

    // =========================
    // CREATE PDF
    // =========================

    const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: [100, 150]
    });

    // =========================
    // PAGE BACKGROUND
    // =========================

    doc.setFillColor(255,255,255);
    doc.rect(0,0,100,150,"F");

    // OUTER BORDER

    doc.setDrawColor(0);
    doc.setLineWidth(0.7);
    doc.rect(4,4,92,142);

    // =========================
    // HEADER
    // =========================

    doc.setFont("helvetica","bold");
    doc.setFontSize(21);

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

    // =========================
    // PAYMENT BOX
    // =========================

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

    doc.setFont("helvetica","bold");
    doc.setFontSize(9);

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

    // =========================
    // AMOUNT BOX
    // =========================

    doc.setTextColor(0,0,0);

    doc.roundedRect(
    52,
    19,
    38,
    18,
    1,
    1
    );

    doc.setFont("helvetica","normal");
    doc.setFontSize(20);

    doc.text(
    `INR ${orderValue}`,
    87,
    31,
    { align: "right" }
    );

    // ORDER ID

    doc.setFontSize(8);

    doc.text(
    `ORDER ID : ${serial}`,
    56,
    42
    );

    // =========================
    // DIVIDER
    // =========================

    doc.line(4,46,96,46);

    // CENTER DIVIDER

    doc.line(50,46,50,102);

    // =========================
    // FROM HEADER
    // =========================

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
    doc.setFontSize(8);

    doc.text(
    "FROM (SELLER)",
    11,
    55
    );

    // =========================
    // FROM CONTENT
    // =========================

    doc.setTextColor(0,0,0);

    doc.setFontSize(15);

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
    // SHIP TO HEADER
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

    doc.setFont("helvetica","bold");
    doc.setFontSize(8);

    doc.text(
    "SHIP TO",
    58,
    55
    );

    // =========================
    // CUSTOMER INFO
    // =========================

    doc.setTextColor(0,0,0);

    doc.setFontSize(13);

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

    doc.setFont("helvetica","normal");
    doc.setFontSize(8);

    const splitAddress =
    doc.splitTextToSize(
    `${address}, ${district}`,
    24
    );

    doc.text(
    splitAddress,
    54,
    78
    );

    doc.setFont("helvetica","bold");

    doc.text(
    `PIN: ${pincode}`,
    54,
    91
    );

    doc.text(
    `PH: ${phone}`,
    54,
    98
    );

    // =========================
    // PRODUCT TABLE
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

    doc.setFont("helvetica","bold");
    doc.setFontSize(8);

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

    // PRODUCT DATA

    doc.setTextColor(0,0,0);

    doc.setFontSize(10);

    const splitProduct =
    doc.splitTextToSize(
    product,
    42
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
    `INR ${orderValue}`,
    92,
    124,
    { align: "right" }
    );

    // =========================
    // TOTAL
    // =========================

    doc.line(4,130,96,130);

    doc.setFont("helvetica","bold");

    doc.setFontSize(13);

    doc.text(
    "ORDER TOTAL",
    8,
    140
    );

    doc.setFont("helvetica","normal");

    doc.setFontSize(20);

    doc.text(
    `INR ${orderValue}`,
    92,
    140,
    { align: "right" }
    );

    // =========================
    // SAVE
    // =========================

    doc.save(
    `shipping-label-${serial}.pdf`
    );

}
