const animate = [
    {
        id: 'benefits',
        prntBlck: '.benefits',
        strtLne: 'startLine1',
        nodeBlck: '.benefits-list-item',
        animate: {
            icon: {
                item: '.benefits-list-icon',
                transition: {
                    name: 'animation',
                    value: 'icon-scale 0.5s ease-in-out',
                },
            },
            text: {
                item: '.benefits-header',
                transition: {
                    name: 'animation',
                    value: 'from-right 0.5s ease-in-out',
                },
            },
        },
        effect: null,
    },
    {
        id: 'capabilities',
        prntBlck: '.capabilities',
        strtLne: 'startLine2',
        nodeBlck: '.capabilities-item',
        animate: null,
        effect: [
            {
                name: 'transform',
                value: 'translate(0, 0%)',
            },
            {
                name: 'opacity',
                value: '1',
            },
        ],
    },
    // {
    //     id: 'banner',
    //     prntBlck: '.banner',
    //     strtLne: 'startLine3',
    //     nodeBlck: '.banner-wrapper',
    //     animate: {
    //         icon: {
    //             item: '.banner-header',
    //             transition: {
    //                 name: 'transform',
    //                 value: 'translate(0%, 0%)'
    //             }
    //         },
    //         text: {
    //             item: '.action-block',
    //             transition: {
    //                 name: 'animation',
    //                 value: 'from-right 0.5s ease-in-out'
    //             }
    //         },
    //     },
    //     effect: null,
    // },
];

window.addEventListener('scroll', () => {
    animate.forEach((mainBlock) => {
        const prntBlck = document.querySelector(mainBlock.prntBlck);
        const strtLne = document.getElementById(mainBlock.strtLne);

        if (
            document.documentElement.offsetHeight >=
            prntBlck.getBoundingClientRect().top +
                +strtLne.offsetTop +
                +(strtLne.offsetHeight / 3)
        ) {
            const itemList = document.querySelectorAll(mainBlock.nodeBlck);

            Array.from(itemList).forEach((item, index) => {
                animateFunc(item, index, mainBlock?.animate, mainBlock?.effect);
            });
        }
    });
});

const animateFunc = (block, num, animateNode, animation) => {
    const ndsBlck = animateNode ? animateNode : null;
    if (ndsBlck) {
        const blck1 = block.querySelectorAll(animateNode?.icon?.item);
        const blck2 = block.querySelectorAll(animateNode?.text?.item);

        Array.from(blck1).forEach((iconItem) => {
            iconItem.style[animateNode?.icon?.transition?.name] =
                `${animateNode?.icon?.transition?.value} 0.${num}s forwards`;
        });

        Array.from(blck2).forEach((item) => {
            item.style[animateNode?.text?.transition?.name] =
                `${animateNode?.text?.transition?.value} 0.${num}s forwards`;
        });

        return true;
    }

    const anmtn = animation ? animation : null;

    if (anmtn) {
        Array.from(animation).forEach((item) => {
            block.style[item.name] = item.value;
        });

        return true;
    }
};

const accordion = document.getElementById('accordion') || false;
const accordionItems = accordion
    ? accordion.querySelectorAll('.accordion-item')
    : false;

if (accordionItems) {
    Array.from(accordionItems).forEach((item) => {
        item.addEventListener('click', () => {
            const title = item.querySelector('.show-img');
            const answer = item.querySelectorAll('.acc-answer')[0];

            answer.style.maxHeight
                ? (answer.style.maxHeight = null)
                : (answer.style.maxHeight = answer.scrollHeight + 'px');
            title.style.transform = answer.style.maxHeight
                ? 'rotate(45deg)'
                : 'rotate(0deg)';
        });
    });
}
