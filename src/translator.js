const useTrnsltr = [
    {
        id: 'navSection',
        semanticElems: ['a', 'button'],
        searchItems: null,
        langs: {
            translated: [
                'Главная',
                'Качества',
                'Индустрии',
                'О нас',
                'Связатья',
                'РУ',
            ],
        },
    },
    {
        id: 'mainSection',
        semanticElems: ['h2', 'p', 'span', 'a'],
        searchItems: [
            'Professional',
            'Machine Manufacturer',
            'Duct',
            'On the basis of integrity, to pursuit customer satisfaction.',
            'Continuous innovation, to help customers achieve their goals',
            'Get a Quote',
            'Contact Us',
        ],
        langs: {
            translated: [
                'Профессиональный производитель',
                ' машин',
                'воздуховодных',
                'Компания MasonCnc предлагает различные варианты линии по производству воздуховодов, здесь вы найдете то, что вам нужно.',
                'Сделать заказ',
                'Связаться с нами',
            ],
        },
    },
    {
        id: 'benefitsSection',
        semanticElems: ['h3', 'output', 'span'],
        searchItems: null,
        langs: {
            translated: [
                '100% собственность и управление MasonCnC',
                'Основано в Нанкине',
            ],
        },
    },
    {
        id: 'benefitsList',
        semanticElems: ['h3', 'output'],
        searchItems: null,
        langs: {
            translated: [
                'Поставка сырья',
                'Тесное сотрудничество с международными брендами, включая Siemens, Yaskawa, Schneider, Bosch Rexroth, Hiwin и т. д.',
                'Производство и переработка',
                'крупногабаритный расточно-фрезерный станок с ЧПУ, портальный обрабатывающий центр, станок плазменной резки с ЧПУ',
                'Продажи на рынке',
                'Семь лет опыта внешнеторговых продаж, большое количество высококлассных дилеров, машины экспортируются за рубеж.',
                'Послепродажное производство',
                'Круглосуточная онлайн-служба предоставит вам техническую консультацию и анализ технических неисправностей после получения машины.',
            ],
        },
    },
    {
        id: 'capabilitiesList',
        semanticElems: ['h3', 'span', 'p', 'a'],
        searchItems: null,
        langs: {
            translated: [
                'Наши',
                'машины',

                'Машина для воздуховодов HVAC',
                'Откройте для себя высококачественную машину для изготовления воздуховодов, которая упрощает изготовление воздуховодов с точностью и эффективностью.',
                'Подробнее о станках с ЧПУ',

                'Листогибочный пресс',
                'Листогибочный пресс — это машина, используемая для гибки листового металла и металлических пластин. Его конструкция длинная и узкая, поэтому он может вмещать большие куски листового металла.',
                'Подробнее о станках с ЧПУ',

                'Машина для резки F/L',
                'Мы обеспечиваем полную сборку от начала до конца и можем доставить готовое изделие к вашей двери. Наш полный ассортимент продукции включает в себя механическую обработку, изготовление, отделку металла, сварку и т. д.',
                'Подробнее о станках с ЧПУ',

                'Другие машины',
                'В дополнение к вышеупомянутым машинам мы предлагаем Вам широкий ассортимент, отвечающий Вашим требованиям.',
                'Машина для проточки пазов',
                'Машина для стрижки',
                'Дыропробивная машина',
                'Прокатная машина',
                'Сварочный аппарат',
                'И многое другое...',
                'Подробнее о наших других машинах',
            ],
        },
    },
];

let translateButton = document.getElementById('setLang');
const useLang = () => {
    Array.from(useTrnsltr).map((parentBlock) => {
        let counter = 0;
        let section = document.getElementById(parentBlock?.id) ?? undefined;
        if (section) {
            let semanticElems =
                section.querySelectorAll(parentBlock?.semanticElems) ??
                undefined;
            if (semanticElems) {
                Array.from(semanticElems).forEach((filtered) => {
                    for (let i = 0; i < filtered?.childNodes.length; i++) {
                        if (
                            filtered?.childNodes[i]?.nodeName === '#text' &&
                            filtered?.childNodes[i].data.indexOf('/n') !== 0
                        ) {
                            // console.log(filtered?.childNodes[i].data.trim());
                            // let text = filtered?.childNodes[i].data.trim();
                            filtered.childNodes[i].data =
                                parentBlock?.langs?.translated[counter] + ' ';
                            counter++;
                        }
                    }
                });
            }
        }
    });
};
translateButton.addEventListener('click', useLang);
