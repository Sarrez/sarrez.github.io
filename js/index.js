// change body text to indicate JS file is working
// document.body.innerHTML += '<p style="color: green; font-size: 20px; text-align: center;">JavaScript file is successfully linked!</p>';
// console.log('JavaScript file is successfully linked!');

// navbar
document.addEventListener('DOMContentLoaded', function () {
	const hamburger = document.getElementById('hamburger');
	const nav = document.querySelector('nav');
  
	// Toggle the hamburger menu and active state
	hamburger.addEventListener('click', function () {
	  hamburger.classList.toggle('active');
	  nav.classList.toggle('active');
	});
  });
  
// for parallax effect
document.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(function(element) {
        let speed = 0.5; // Adjust this to control the speed of the parallax
        let offset = scrollPosition * speed;
        element.style.backgroundPosition = `center ${offset}px`;
    });
});

// for projects section
const container = document.querySelector('.projects-container');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

let currentPage = 0; // Track current page

function getProjectsPerPage() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) return 1; // Mobile
    if (screenWidth <= 1024) return 2; // Tablet
    return 3; // Desktop
}

function getProjectWidth() {
    const project = container.querySelector('.project'); 
    return project.offsetWidth + 20; 
}

function updateContainerWidth() {
    const projectsPerPage = getProjectsPerPage();
    const projectWidth = getProjectWidth();
    const visibleWidth = projectsPerPage * projectWidth;
    container.style.width = `${visibleWidth}px`;
}

function updateScrollPosition() {
    const projectWidth = getProjectWidth();
    const projectsPerPage = getProjectsPerPage();
    const scrollLeft = currentPage * projectWidth * projectsPerPage;
    container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth',
    });
}

// Scroll to next page
rightBtn.addEventListener('click', () => {
    const totalProjects = container.children.length;
    const projectsPerPage = getProjectsPerPage();
    const maxPages = Math.ceil(totalProjects / projectsPerPage);

    if (currentPage < maxPages - 1) {
        currentPage++;
        updateScrollPosition();
    }
});

// Scroll to previous page
leftBtn.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        updateScrollPosition();
    }
});

// Handle screen resize
window.addEventListener('resize', () => {
    currentPage = 0; 
    updateContainerWidth();
    updateScrollPosition();
});

updateContainerWidth();


