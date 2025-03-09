document.addEventListener("DOMContentLoaded", function () {  
    const menu = document.querySelector(".nav-links");  
    const hamburger = document.querySelector(".hamburger");  

    hamburger.addEventListener("click", function () {  
        menu.classList.toggle("active");  
    });

    document.body.addEventListener("click", function (e) {  
        if (!menu.contains(e.target) && e.target !== hamburger) {  
            menu.classList.remove("active");  
        }  
    });
});
