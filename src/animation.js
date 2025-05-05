const animate = [
    {
        id:'benefits',
        prntBlck: '.benefits', 
        strtLne: 'startLine1',
        nodeBlck: '.benefits-list-item',
        animate: {
            icon: '.benefits-list-icon',
            text: '.benefits-header'
        },
        animation: 'icon-scale 0.5s ease-in-out'
    },    
    {
        id: 'capabilities',
        prntBlck: '.capabilities', 
        strtLne: 'startLine2',
        nodeBlck: '.capabilities-item',
        animate: null,
        animation: '1'
    },
    {
        id: 'work-process',
        prntBlck: '.work-process', 
        strtLne: 'startLine3',
        nodeBlck: '.work-stages-item',
        animate: {
            icon: '.icon-scale',

        },
        animation: 'from-bottom-opacity 0.9s ease-in-out'
    },
]

window.addEventListener('scroll', () => {

    animate.forEach((mainBlock) => {

        const prntBlck = document.querySelector(mainBlock.prntBlck);
        const strtLne = document.getElementById(mainBlock.strtLne);

        console.log(document.documentElement.offsetHeight +":"+ (prntBlck.getBoundingClientRect().top + +strtLne.offsetTop + (+strtLne.offsetHeight / 2)))
        if(document.documentElement.offsetHeight >= (prntBlck.getBoundingClientRect().top + +strtLne.offsetTop + (+strtLne.offsetHeight / 2))) {
            const itemList = document.querySelectorAll(mainBlock.nodeBlck);

            Array.from(itemList).forEach((item, index) => {
                animateFunc(item, index, mainBlock?.animate, mainBlock?.animation);
            })
            
        }

    })

   
})

const animateFunc = (elem, index, hasElem, animation) => {
    
        if(hasElem === null) {
           return elem.style.opacity = animation
        }
            const icon = elem.querySelectorAll(hasElem.icon);
            const text = elem.querySelectorAll(hasElem.text);

            Array.from(icon).forEach((iconItem) => {
                iconItem.style.transform = 'scale(1, 1)';
                // iconItem.style.animation = animation;
            })

            Array.from(text).forEach((item) => {
                item.style.animation = `from-right 0.5s ease-in-out 0.${index}s forwards`;
            })
        
}



const accordion = document.getElementById('accordion');
const accordionItems = accordion.querySelectorAll('.accordion-item');
Array.from(accordionItems).forEach((item) => {
    item.addEventListener('click', () => {
        const answer = item.querySelectorAll('.acc-answer')[0];
        
            answer.style.maxHeight ? answer.style.maxHeight = null : answer.style.maxHeight = answer.scrollHeight + 'px';
    })
})