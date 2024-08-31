
function emailSend() {
    // Get form data
    const name = document.getElementById("name-field").value;
    const email = document.getElementById("email-field").value;
    const subject = document.getElementById("subject-field").value;
    const message = document.getElementById("message-field").value;

    // Create the email body
    const emailBody = `
        Name: ${name}<br>
        Email: ${email}<br>
        Subject: ${subject}<br>
        Message: ${message}
    `;

    // Send email
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "rajaahirwar1504@gmail.com",
        Password: "894ABBCE55FCCD9E27D4446DC8B53605B2EC",
        To: 'rajaahirwar1504@gmail.com',
        From: "rajaahirwar1504@gmail.com",  // Use the same verified email address here
        Subject: subject,
        Body: emailBody
    }).then(
        message => alert("Your message has been sent successfully!")
    ).catch(
        error => alert('Error: ' + error)
    );
}

