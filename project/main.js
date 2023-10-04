//Sidebar
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const menuOpenIcon = document.getElementById('menu-open');
const menuCloseIcon = document.getElementById('menu-close');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('-translate-x-full');
    menuOpenIcon.classList.toggle("hidden");
    menuCloseIcon.classList.toggle("hidden");
});

//Accordion
document.querySelector('.accordion').addEventListener('click', function (event) {
    if (event.target.classList.contains('toggle-button')) {
        const button = event.target;
        const panel = button.closest('.accordion-item').querySelector('.panel-content');

        // Toggle the visibility of the panel
        panel.classList.toggle('hidden');
    }
});

//Process
document.querySelector('.process-box').addEventListener('click', function (event) {
    if (event.target.classList.contains('process-header')) {
        const button = event.target;
        const panel = button.closest('.process-header').querySelector('.process-detail');

        // Toggle the visibility of the detail
        panel.classList.toggle('hidden');
    }
});

//Scroll Effect
window.addEventListener('scroll', reveal);
function reveal() {
    let reveals = document.querySelectorAll('.reveal')

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 150

        if (revealtop < windowHeight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }

}

//Back To Top
let scrollButton = document.getElementById('scrollButton')
window.onscroll = function () {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollButton.style.display = 'block'
    } else {
        scrollButton.style.display = 'none'
    }
}
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}