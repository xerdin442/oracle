//Sidebar
const menuToggle = document.querySelector('#menu-toggle');
const sidebar = document.querySelector('#sidebar');
const menuOpenIcon = document.querySelector('#menu-open');
const menuCloseIcon = document.querySelector('#menu-close');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('-translate-x-full');
  menuOpenIcon.classList.toggle("hidden");
  menuCloseIcon.classList.toggle("hidden");
});


// Accordion
function toggleAccordion(panelButton) {
  let accordion = panelButton.parentNode.parentNode
  let panel = accordion.querySelector('.panel-content')

  // Toggle the visibility of the panel
  panel.classList.toggle('hidden');
  // Close any open panels that is not the clicked panel
  let panels = document.querySelectorAll('.panel-content')
  panels.forEach((otherPanel) => {
    if (otherPanel !== panel) {
      otherPanel.classList.add('hidden')
    }
  })
  // Update all toggle buttons based on panel visibility
  let allButtons = document.querySelectorAll('.toggle-button');
  allButtons.forEach((button) => {
    if (button !== panelButton) {
      button.textContent = '+';
    }
  });
  // Change toggle button for clicked panel
  if (panel.classList.contains('hidden')) {
    panelButton.textContent = '+'
  } else {
    panelButton.textContent = '-'
  }
}


// Process
function toggleDetail(processHeader) {
  let detail = processHeader.querySelector('.process-detail')

  // Toggle the visibility of the detail
  detail.classList.toggle('hidden');
  // Close any open details that is not the clicked detail
  let details = document.querySelectorAll('.process-detail')
  details.forEach((otherDetail) => {
    if (otherDetail !== detail) {
      otherDetail.classList.add('hidden')
    }
  })
}


// Scroll Effect
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

// Back To Top
let scrollButton = document.querySelector('#scrollButton')
window.onscroll = function () { scrollFunction() };

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