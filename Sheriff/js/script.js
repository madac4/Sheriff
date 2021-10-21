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

const tabs = document.querySelectorAll(".tabs .tab");
const contents = document.querySelectorAll(".tabs-content .content");

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