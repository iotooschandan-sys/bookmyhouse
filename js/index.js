document.addEventListener("DOMContentLoaded", () => {

// banner form home page

      // =========================
        // DROPDOWN
        // =========================

        const selectBox =
            document.getElementById("selectBox");

        const dropdownMenu =
            document.getElementById("dropdownMenu");

        const arrow =
            document.getElementById("arrow");


        selectBox.addEventListener("click", () => {

            dropdownMenu.classList.toggle("show");

            if (dropdownMenu.classList.contains("show")) {

                arrow.classList.remove("fa-chevron-down");
                arrow.classList.add("fa-chevron-up");

            } else {

                arrow.classList.remove("fa-chevron-up");
                arrow.classList.add("fa-chevron-down");

            }

        });



        // =========================
        // SELECT SERVICE
        // =========================

        const items =
            document.querySelectorAll(".dropdown-item-custom");


        items.forEach(item => {

            item.addEventListener("click", function () {

                const icon =
                    this.querySelector(".service-icon").innerHTML;

                const text =
                    this.querySelector("h5").innerText;


                document.getElementById("selectedIcon")
                    .innerHTML = icon;

                document.getElementById("selectedText")
                    .innerText = text;


                items.forEach(el =>
                    el.classList.remove("active")
                );

                this.classList.add("active");


                dropdownMenu.classList.remove("show");

                arrow.classList.remove("fa-chevron-up");
                arrow.classList.add("fa-chevron-down");

            });

        });



        // =========================
        // PAGE 1 -> PAGE 2
        // =========================

        document.getElementById("nextBtn")
            .addEventListener("click", function () {

                document.getElementById("page1")
                    .classList.add("d-none");

                document.getElementById("page2")
                    .classList.remove("d-none");

            });



        // =========================
        // PAGE 2 -> PAGE 1
        // =========================

        document.getElementById("prevBtn")
            .addEventListener("click", function () {

                document.getElementById("page2")
                    .classList.add("d-none");

                document.getElementById("page1")
                    .classList.remove("d-none");

            });



        // =========================
        // GENDER ACTIVE
        // =========================

        const genderCards =
            document.querySelectorAll(".gender-card");


        genderCards.forEach(card => {

            card.addEventListener("click", function () {

                genderCards.forEach(el =>
                    el.classList.remove("active-gender")
                );

                this.classList.add("active-gender");

            });

        });



        // =========================
        // PAGE 2 -> PAGE 3
        // =========================

        document.getElementById("genderNextBtn")
            .addEventListener("click", function () {

                document.getElementById("page2")
                    .classList.add("d-none");

                document.getElementById("page3")
                    .classList.remove("d-none");

            });



        // =========================
        // PAGE 3 -> PAGE 2
        // =========================

        document.getElementById("backBtn")
            .addEventListener("click", function () {

                document.getElementById("page3")
                    .classList.add("d-none");

                document.getElementById("page2")
                    .classList.remove("d-none");

            });

            // =========================
// SERVICE OPTION ACTIVE
// =========================

const serviceOptions =
document.querySelectorAll(".service-option");


serviceOptions.forEach(option => {

    option.addEventListener("click", function(){

        // REMOVE ACTIVE FROM ALL

        serviceOptions.forEach(el =>
            el.classList.remove("active")
        );

        // ADD ACTIVE TO CLICKED

        this.classList.add("active");

    });

});

// banner form home page ============================================================================


// =========================
//  CARDS
// =========================

const cards = document.querySelectorAll(".card");
const flags = document.querySelectorAll(".flag");

let active = 0;

// =========================
// UPDATE CARDS
// =========================

function updateCards() {

    cards.forEach(card => {
        card.classList.remove("active", "prev", "next");
    });

    flags.forEach(flag => {
        flag.classList.remove("active");
    });

    const prev =
        (active - 1 + cards.length) % cards.length;

    const next =
        (active + 1) % cards.length;

    // active card
    cards[active].classList.add("active");

    // prev card
    cards[prev].classList.add("prev");

    // next card
    cards[next].classList.add("next");

    // active flag
    if(flags[active]){
        flags[active].classList.add("active");
    }
}

updateCards();


// =========================
// FLAG CLICK
// =========================

flags.forEach((flag, index) => {

    flag.addEventListener("click", () => {

        active = index;

        updateCards();

    });

});


// =========================
// CARD IMAGE CLICK
// =========================

cards.forEach((card, index) => {

    const img = card.querySelector("img");

    img.addEventListener("click", () => {

        active = index;

        updateCards();

    });

});


// =========================
// AUTO SLIDE
// =========================

setInterval(() => {

    active = (active + 1) % cards.length;

    updateCards();

}, 3000);
    // =========================
    // TESTIMONIAL SWIPER
    // =========================

    if (document.querySelector(".testimonial-swiper")) {

        new Swiper(".testimonial-swiper", {

            slidesPerView: 3,
            spaceBetween: 10,
            loop: true,

            breakpoints: {

                320: {
                    slidesPerView: 1,
                },

                576: {
                    slidesPerView: 2,
                },

                768: {
                    slidesPerView: 2,
                },

                992: {
                    slidesPerView: 3,
                }

            }

        });

    }

    // =========================
    // VIDEO SWIPER
    // =========================

    if (document.querySelector(".video-swiper")) {

        new Swiper(".video-swiper", {

            spaceBetween: 30,
            loop: true,
            centeredSlides: true,

            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },

        });

    }

    // =========================
    // SEARCH BOX
    // =========================

    const searchInput =
        document.getElementById("searchInput");

    const serviceList =
        document.getElementById("serviceList");

    const serviceItems =
        document.querySelectorAll(".service-item");

    if (searchInput && serviceList) {

        // SHOW SERVICES

        searchInput.addEventListener("click", () => {

            serviceList.style.display = "block";

        });

        // CLICK SERVICE

        serviceItems.forEach((item) => {

            item.addEventListener("click", () => {

                searchInput.value = item.innerText;

                serviceList.style.display = "none";

            });

        });

        // OUTSIDE CLICK

        document.addEventListener("click", (e) => {

            if (!e.target.closest(".search-wrapper")) {

                serviceList.style.display = "none";

            }

        });

    }

    // =========================
    // CLIENT COUNTER
    // =========================

    const statsSection =
        document.querySelector(".stats-wrapper");

    const counters =
        document.querySelectorAll(".counter");

    if (statsSection && counters.length > 0) {

        let started = false;

        function runCounter() {

            const sectionTop =
                statsSection.getBoundingClientRect().top;

            const screenPosition =
                window.innerHeight - 100;

            if (sectionTop < screenPosition && !started) {

                started = true;

                counters.forEach(counter => {

                    const target =
                        +counter.getAttribute("data-count");

                    let count = 0;

                    const increment =
                        target / 100;

                    const updateCounter = setInterval(() => {

                        count += increment;

                        if (count >= target) {

                            counter.innerText = target;

                            clearInterval(updateCounter);

                        } else {

                            counter.innerText =
                                Math.ceil(count);

                        }

                    }, 30);

                });

            }

        }

        window.addEventListener("scroll", runCounter);

    }

    // =========================
    // PROGRESS BAR
    // =========================

    const testimonialSection =
        document.querySelector(".new-testimonial");

    const bars =
        document.querySelectorAll(".progress-bar");

    if (testimonialSection && bars.length > 0) {

        let started = false;

        function animateBars() {

            const sectionTop =
                testimonialSection.getBoundingClientRect().top;

            const screenPosition =
                window.innerHeight - 100;

            if (sectionTop < screenPosition && !started) {

                started = true;

                bars.forEach((bar) => {

                    let width =
                        bar.getAttribute("data-width");

                    setTimeout(() => {

                        bar.style.width = width + "%";

                    }, 500);

                });

            }

        }

        window.addEventListener("scroll", animateBars);

    }

});