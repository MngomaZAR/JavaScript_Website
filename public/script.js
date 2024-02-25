document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const formData = new FormData(contactForm);
        const formDataJSON = {};

        // Convert FormData to JSON
        formData.forEach(function (value, key) {
            formDataJSON[key] = value;
        });

        // Send form data to server using fetch API
        fetch('/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formDataJSON)
        })
        .then(response => response.json())
        .then(data => {
            // Handle response from server
            console.log(data);
            alert(data.success || data.error);
            contactForm.reset(); // Reset form
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        });
    });
});
