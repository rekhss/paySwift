document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".nav-links");
    const hamburger = document.querySelector(".hamburger");

    document.body.addEventListener("click", function (e) {
        if (e.target === hamburger) {
            menu.classList.toggle("active");
        } else if (e.target.closest(".nav-links a")) {
            menu.classList.remove("active");
        }
    });
});
