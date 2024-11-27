document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let service = document.getElementById('service').value;
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;
    let name = document.getElementById('name').value;
    let contact = document.getElementById('contact').value;

    if (!service || !date || !time || !name || !contact) {
        alert("Please fill out all required fields.");
        return;
    }

    alert("Your appointment has been booked!");

    // Optionally, you can send the form data to a server or email here.
});
