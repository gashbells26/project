const cards = document.querySelectorAll('.card');
const dots = document.querySelectorAll('.dot');
let current = 0;

function showCard(index) {
    cards.forEach((card, i) => {
        if (i === index) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('dot-fill');
        } else {
            dot.classList.remove('dot-fill');
        }
    });
}
document.querySelector('.slider-left').addEventListener('click', () => {
    showCard((current - 1 + cards.length) % cards.length);
    current = (current - 1 + cards.length) % cards.length;
});
document.querySelector('.slider-right').addEventListener('click', () => {
    showCard((current + 1) % cards.length);
    current = (current + 1) % cards.length;
});