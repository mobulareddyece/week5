document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact Form Submission Handling
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const name = document.getElementById('contactName').value.trim();
            const email = document.getElementById('contactEmail').value.trim();
            const message = document.getElementById('contactMessage').value.trim();

            if (name === '' || email === '' || message === '') {
                formStatus.textContent = 'Please fill in all fields.';
                formStatus.style.color = 'red';
                formStatus.style.display = 'block';
            } else if (!/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
                formStatus.textContent = 'Please enter a valid email address.';
                formStatus.style.color = 'red';
                formStatus.style.display = 'block';
            } else {
                // Simulate form submission
                console.log('Form Data:', { name, email, message });
                formStatus.textContent = 'Message sent successfully!';
                formStatus.style.color = 'green';
                formStatus.style.display = 'block';
                contactForm.reset();
            }
        });
    }
});