document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // SERVICE SEARCH DROPDOWN
    // =========================

    const serviceSearchField =
        document.getElementById("serviceSearchInput");

    const serviceDropdownBox =
        document.getElementById("serviceDropdownMenu");

    const serviceDropdownOptions =
        document.querySelectorAll(".service-dropdown-item");

    const serviceNoDataMessage =
        document.getElementById("serviceEmptyMessage");

    if (
        serviceSearchField &&
        serviceDropdownBox &&
        serviceNoDataMessage
    ) {

        // SHOW DROPDOWN

        serviceSearchField.addEventListener("click", () => {

            serviceDropdownBox.style.display = "block";

        });

        // SEARCH FILTER

        serviceSearchField.addEventListener("input", function () {

            let serviceSearchValue =
                this.value.toLowerCase();

            let serviceMatched = false;

            serviceDropdownOptions.forEach((serviceOption) => {

                let serviceOptionText =
                    serviceOption.innerText.toLowerCase();

                if (serviceOptionText.includes(serviceSearchValue)) {

                    serviceOption.style.display = "flex";

                    serviceMatched = true;

                } else {

                    serviceOption.style.display = "none";

                }

            });

            // NO RESULT MESSAGE

            if (serviceMatched) {

                serviceNoDataMessage.style.display = "none";

            } else {

                serviceNoDataMessage.style.display = "block";

            }

            serviceDropdownBox.style.display = "block";

        });

        // SELECT SERVICE

        serviceDropdownOptions.forEach((serviceOption) => {

            serviceOption.addEventListener("click", () => {

                let textElement =
                    serviceOption.querySelector(".service-dropdown-text");

                if (textElement) {

                    serviceSearchField.value =
                        textElement.innerText;

                }

                serviceDropdownBox.style.display = "none";

            });

        });

        // OUTSIDE CLICK

        document.addEventListener("click", (event) => {

            if (
                !event.target.closest(".service-search-container")
            ) {

                serviceDropdownBox.style.display = "none";

            }

        });

    }


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