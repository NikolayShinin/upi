import tippy from 'tippy.js';
window.tippy = tippy;

const ad = tippy(mapSliderPagination, {
    content(reference) {
        return reference.querySelector('svg').getAttribute('title');
    },
    animation: 'scale',
    touch: false,
});
