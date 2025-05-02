const benefits = document.querySelectorAll('.benefits')[0];
const startLine = document.getElementById('benefitsStart');

window.addEventListener('scroll', () => {
    if(document.documentElement.offsetHeight >= benefits.getBoundingClientRect().top + startLine.offsetTop + startLine.offsetHeight) {
        const benefitsList = document.querySelectorAll('.benefits-list-item');

        Array.from(benefitsList).forEach((item, index) => {
            let icon = item.querySelectorAll('.benefits-list-icon');
            let text = item.querySelectorAll(['.benefits-header', 'benefits-notice-title > output']);

        Array.from(icon).forEach((iconItem) => {
            iconItem.style.transform = 'scale(1, 1)';
            iconItem.style.animation = `icon-scale 0.5s ease-in-out`;
            })

            Array.from(text).forEach((item) => {
                item.style.animation = `from-right 0.5s ease-in-out 0.${index}s forwards`;
            })
        })
    }
})