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