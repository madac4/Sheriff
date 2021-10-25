@@include('swiper.min.js');
@@include('slider.js');
const header = document.querySelector('header');
if (header) {
    document.addEventListener('scroll', () => {
        const scrollH = window.scrollY;
        const headerH = header.offsetHeight;
        const headerButton = header.querySelector('.header-controls__button a')
        if (scrollH >= headerH) {
            header.classList.add('sticky');
            headerButton.classList.remove('btn-accent');
            headerButton.classList.add('btn-outline');
        } else {
            header.classList.remove('sticky');
            headerButton.classList.remove('btn-outline');
            headerButton.classList.add('btn-accent');
        }
    })

    const burger = document.querySelector('.burger');
    const navbar = document.querySelector('.navbar');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        navbar.classList.toggle('active');
        document.body.classList.toggle('lock');
    })
}

const headerControl = document.querySelector('.header-controls__languages');
window.addEventListener('resize', () => {
    adaptive_function();
});

function adaptive_header(w, h) {
    var navbar = document.querySelector('.navbar');
    var controls = document.querySelector('.header-controls');

    var result = headerControl.classList.contains('done');
    if (w < 640) {
        if (!result) {
            headerControl.classList.add('done');
            navbar.insertBefore(headerControl, navbar.lastChild);
        }
    } else {
        if (result) {
            headerControl.classList.remove('done');
            controls.insertBefore(headerControl, controls.firstChild);
        }
    }
}

function adaptive_function() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    adaptive_header(w, h);
}
adaptive_function();



const accordionItem = document.querySelectorAll('.accordion-item')

if (accordionItem[0]) {
    accordionItem.forEach(accordion => {
        const control = accordion.querySelector('.accordion-item__header')
        const content = accordion.querySelector('.accordion-item__content')
        control.addEventListener('click', () => {
            if (!accordion.classList.contains('is-open')) {
                accordion.classList.add('is-open');
                control.setAttribute('aria-expanded', true);
                content.setAttribute('aria-hidden', false);
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                accordion.classList.remove('is-open');
                control.setAttribute('aria-expanded', false);
                content.setAttribute('aria-hidden', true);
                content.style.maxHeight = null;
            }
        })
    })
}

const tabs = document.querySelectorAll(".tabs .tab");
const contents = document.querySelectorAll(".tabs-content .content");

if (tabs[0]) {
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener("click", () => {
            for (let j = 0; j < contents.length; j++) {
                contents[j].classList.remove("active");
            }
            for (let jj = 0; jj < tabs.length; jj++) {
                tabs[jj].classList.remove("active");
            }
            contents[i].classList.add("active");
            tabs[i].classList.add("active");
        });
    }
}


const roadmapAccordionItem = document.querySelectorAll('.roadmap-content__accordion')

if (roadmapAccordionItem[0]) {
    roadmapAccordionItem.forEach(accordion => {
        const control = accordion.querySelector('.roadmap-accordion__header')
        const content = accordion.querySelector('.roadmap-accordion__content')
        control.addEventListener('click', () => {
            if (!accordion.classList.contains('is-open')) {
                accordion.classList.add('is-open');
                control.setAttribute('aria-expanded', true);
                content.setAttribute('aria-hidden', false);
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                accordion.classList.remove('is-open');
                control.setAttribute('aria-expanded', false);
                content.setAttribute('aria-hidden', true);
                content.style.maxHeight = null;
            }
        })
    })
}

// external js: isotope.pkgd.js

// init Isotope
// var iso = new Isotope('.insta-section__grid', {
//     itemSelector: '.el',
//     layoutMode: 'fitRows'
// });

// var filterFns = {
//     numberGreaterThan50: function (itemElem) {
//         var number = itemElem.querySelector('.number').textContent;
//         return parseInt(number, 10) > 50;
//     },
//     ium: function (itemElem) {
//         var name = itemElem.querySelector('.name').textContent;
//         return name.match(/ium$/);
//     }
// };

// var filtersElem = document.querySelector('.insta-section__buttons');
// filtersElem.addEventListener('click', function (event) {
//     if (!matchesSelector(event.target, 'button')) {
//         return;
//     }
//     var filterValue = event.target.getAttribute('data-filter');
//     filterValue = filterFns[filterValue] || filterValue;
//     iso.arrange({ filter: filterValue });
// });

// var buttonGroups = document.querySelectorAll('.insta-section__buttons');
// for (var i = 0, len = buttonGroups.length; i < len; i++) {
//     var buttonGroup = buttonGroups[i];
//     radioButtonGroup(buttonGroup);
// }

// function radioButtonGroup(buttonGroup) {
//     buttonGroup.addEventListener('click', function (event) {
//         if (!matchesSelector(event.target, 'button')) {
//             return;
//         }
//         buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
//         event.target.classList.add('is-checked');
//     });
// }


var swiperMobile = new Swiper('.slider-phone__body', {
    slidesPerView: 1,
    spaceBetween: 20,
    slideToClickedSlide: true,
    centeredSlides: true,
    loop: true,
    //   autoplay: {
    //     delay: 100000,
    //   },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return `
            <div class="${className}">
                <div class="circle"></div>
                <div class="line"></div>
            </div>`
        },
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },

    breakpoints: {

        // 640: {
        //     freemode: true,
        //     slidesPerView: 3,
        //     spaceBetween: 20,
        // },
        // 320: {
        //     freemode: true,
        //     slidesPerView: 3,
        //     spaceBetween: 20,
        // }
    }

});

const pagination = document.querySelector('.slider-phone-controls__dots .swiper-pagination');
const sliderBullets = [...pagination.getElementsByClassName("swiper-pagination-bullet")];

sliderBullets.map((bullet) => {
    bullet.onclick = () => {
        i = sliderBullets.indexOf(bullet);

        setTimeout(() => {
            if (bullet.classList.contains !== 'swiper-pagination-bullet-active') {
                for (i; i >= 0; --i) sliderBullets[i].classList.add('swiper-pagination-bullet-active');
            } else {
                for (i; i < sliderBullets.length; ++i) sliderBullets[i].classList.remove('swiper-pagination-bullet-active');
            }
        }, 5);
    };
});