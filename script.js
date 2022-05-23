    let menuBtn = document.getElementById("menu-btn")
    let cancelBtn = document.getElementById("cancel-btn");
    let navBar = document.getElementById("navbar");
    let body = document.querySelector("body");





    menuBtn.addEventListener("click", function () {

        menuBtn.style.opacity = "0";
        menuBtn.style.pointerEvents = "none";
        navBar.classList.add("active")
        body.style.overflow = "hidden"

    })

    cancelBtn.addEventListener("click", function () {
        menuBtn.style.opacity = "1";
        menuBtn.style.pointerEvents = "auto";
        navBar.classList.remove("active")
        body.style.overflow = "auto"

    })





    window.addEventListener('scroll', function () {
        let header = document.querySelector('.header');
        header.classList.toggle("sticky", window.scrollY > 0);
    })



    let navlinks = document.querySelectorAll(".menu li a"); {
        for (let index = 0; index < navlinks.length; index++) {
            navlinks[index].addEventListener("click", () => {
                menuBtn.style.opacity = "1";
                menuBtn.style.pointerEvents = "auto";
                navBar.classList.remove("active")
                body.style.overflow = "auto"
            });

        }
    }



