
const tabContent = document.querySelectorAll('.tab');
const info = document.querySelectorAll('.description-features');

const selectTab = (e) => {
    // Remove active class from all tabs
    for (let i = 0; i < tabContent.length; i++) {
        info[i].classList.remove('active');
        tabContent[i].classList.remove('active');
    }

    if(e.target) {
        // Add active class to the clicked tab
        const tabDisplay = e.target.getAttribute('aria-controls');
        const tabContent = document.getElementById(tabDisplay);
        tabContent.classList.add('active');
        e.target.classList.add('active');
    }
}

Array.from(tabContent).forEach((tab) => {
    tab.addEventListener('click', selectTab);
})