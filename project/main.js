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