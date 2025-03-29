document.addEventListener("DOMContentLoaded", function() {
    let lastScrollTop = 0;
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            /* navbar.classList.add("hidden");*/
             navbar.style.transform = "translateY(-100%)";
        } else {
            /* navbar.classList.remove("hidden");*/
             navbar.style.transform = "translateY(0)";
        }
        lastScrollTop = scrollTop;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const dropdownButton = document.querySelector(".dropdown-button");
    const dropdownContent = document.querySelector(".dropdown-content");

    dropdownButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent navigating to index.html immediately
        dropdownContent.classList.toggle("show");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function(event) {
        if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.classList.remove("show");
        }
    });
});

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    var formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    fetch("https://script.google.com/macros/s/AKfycbybg40-q3eWYLyrKYTpInVmDpYnvISeO7gNU1Dqhg76pwBLjDEhkAVrAG2NpdvI1Dnp/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    }).then(() => {
        document.getElementById("response-message").innerText = "Message sent successfully!";
        document.getElementById("contact-form").reset();
    }).catch(error => {
        console.error("Error:", error);
        document.getElementById("response-message").innerText = "Something went wrong. Please try again.";
    });
});