document.getElementById('generateBtn').addEventListener('click', function() {
    let url = document.getElementById('urlInput').value;
    
    if (url.trim() === "") {
        alert("Please enter a URL.");
        return;
    }

    // Clear the previous QR code and download link
    document.getElementById('qrcode').innerHTML = "";
    document.getElementById('downloadLink').style.display = "none";

    // Generate new QR code
    let qrcode = new QRCode(document.getElementById('qrcode'), {
        text: url,
        width: 200,
        height: 200
    });

    // Set a short delay to ensure QR code generation before download link is updated
    setTimeout(() => {
        // Get the QR code image element
        let qrCodeImg = document.querySelector("#qrcode img");
        if (qrCodeImg) {
            let imgSrc = qrCodeImg.src;

            // Update the download link with the QR code image source
            let downloadLink = document.getElementById('downloadLink');
            downloadLink.href = imgSrc;
            downloadLink.style.display = "inline-block";
        }
    }, 300); // Adjust the timeout if needed
});
