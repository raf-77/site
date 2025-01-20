document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Verhindert Neuladen der Seite

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    emailjs.send("service_3za8fxa", "template_zoyywrs", {
        from_name: name,
        email: email,
        message: message
    })
    .then(() => {
        alert("Nachricht erfolgreich gesendet!");
    })
    .catch(error => {
        console.error("Fehler beim Senden der Nachricht:", error);
        alert("Es gab ein Problem beim Senden der Nachricht.");
    });
});