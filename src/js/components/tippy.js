import tippy from 'tippy.js';
window.tippy = tippy;

const ad = tippy(mapSliderPagination, {
    content(reference) {
        return reference.querySelector('path').getAttribute('title');
    },
    animation: 'scale',
    touch: false,
});
