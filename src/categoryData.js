import sendRequest from './request.js';
import useShowCategory from './showCategory.js';

const category = {
    defaultValue: 'Duct Production Line',
    selectedValue: localStorage.getItem('key'),
};

window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('key') === null) {
        localStorage.setItem('key', category.defaultValue);
    }
});

function addEvent(attr) {
    let elems = attr.querySelectorAll('a');
    elems.forEach((element) => {
        const value =
            element.getAttribute('data-value') || category.defaultValue;

        element.addEventListener('click', () => {
            localStorage.setItem('key', value);
            category.selectedValue = localStorage.getItem('key');
            location.reload();
        });
    });
}

let nodeElem = document.getElementById('links');
nodeElem !== null && addEvent(nodeElem);

sendRequest().then((response) => {
    useShowCategory(category, response);
});
