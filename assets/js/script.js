var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}



var splide = new Splide('.splide', {
    perPage: 4,
    rewind: true,
    gap: "30px",
    breakpoints: {
        1200: { perPage: 2, gap: '1rem' },
        350: { perPage: 1, gap: 0 },
    },
});

splide.mount()


document.addEventListener("DOMContentLoaded", function () {
    let splideElements = document.querySelectorAll(".testimonial");

    splideElements.forEach(function (element) {
        let splide = new Splide(element, {
            type: "loop",
            perPage: 3,
            perMove: 1,
            gap: "40px",
            pagination: true,
            breakpoints: {
                1350: {
                    gap: "20px",
                },
                991: {
                    perPage: 2,
                    gap: "15px",
                },
                575: {
                    perPage: 1,
                    gap: "10px",
                },
            },
        });

        splide.mount();
    });
});



document.addEventListener("DOMContentLoaded", function () {
    let splideElements = document.querySelectorAll(".why-choose");

    splideElements.forEach(function (element) {
        let splide = new Splide(element, {
            type: "loop",
            perPage: 3,
            perMove: 1,
            gap: "40px",
            pagination: true,
            breakpoints: {
                1350: {
                    gap: "20px",
                },
                991: {
                    perPage: 2,
                    gap: "15px",
                },
                575: {
                    perPage: 1,
                    gap: "10px",
                },
            },
        });

        splide.mount();
    });
});





document.addEventListener("DOMContentLoaded", function () {
    let splideElements = document.querySelectorAll(".client");

    splideElements.forEach(function (element) {
        let splide = new Splide(element, {
            type: "loop",
            perPage: 3,
            perMove: 1,
            gap: "40px",
            pagination: true,
            breakpoints: {
                1350: {
                    gap: "20px",
                },
                991: {
                    perPage: 2,
                    gap: "15px",
                },
                586: {
                    perPage: 1,
                    gap: "10px",
                },
            },
        });

        splide.mount();
    });
});
