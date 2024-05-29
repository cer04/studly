document.addEventListener("DOMContentLoaded", function() {
    const signinContainer = document.querySelector('.signin-container');

    function handleScroll() {
        const rect = signinContainer.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            signinContainer.classList.add('visible');
            window.removeEventListener('scroll', handleScroll);
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once on load to check the visibility
});

document.getElementById("signinForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("emailInput").value;
    var password = document.getElementById("passwordInput").value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    alert("Thank you for signing in " + email);
    location.reload();
});



document.addEventListener('DOMContentLoaded', function() {
    const enrollItems = document.querySelectorAll('.enroll-item');

    function handleScroll() {
        const scrollY = window.scrollY + window.innerHeight;
        enrollItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top + window.scrollY;
            if (scrollY > itemTop) {
                item.classList.add('visible');
            } else {
                item.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once on load to check the visibility
});







// Scroll to Top Function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show the Scroll to Top Button
window.onscroll = function() { showScrollButton(); };

function showScrollButton() {
    const scrollButton = document.querySelector('.contact-button');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
}
