document.addEventListener("DOMContentLoaded", function() {
    let lastScrollTop = 0;
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function() {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            navbar.classList.add("hidden");
            /*navbar.style.transform = "translateY(-100%)";*/
        } else {
            navbar.classList.remove("hidden");
            /*navbar.style.transform = "translateY(0)";*/
        }
        lastScrollTop = scrollTop;
    });
});
