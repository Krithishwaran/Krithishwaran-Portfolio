const dot = document.querySelector('.cursor-dot');
const outline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    dot.style.left = `${posX}px`;
    dot.style.top = `${posY}px`;

    outline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

document.querySelectorAll('.hover-target').forEach(el => {
    el.addEventListener('mouseenter', () => {
        outline.style.width = '50px';
        outline.style.height = '50px';
        outline.style.borderColor = 'rgba(0, 255, 204, 1)';
        outline.style.backgroundColor = 'rgba(0, 255, 204, 0.1)';
    });
    el.addEventListener('mouseleave', () => {
        outline.style.width = '30px';
        outline.style.height = '30px';
        outline.style.borderColor = 'rgba(0, 255, 204, 0.5)';
        outline.style.backgroundColor = 'transparent';
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach((el) => {
    observer.observe(el);
});

const typeWriterElement = document.querySelector('.typewriter');
const textToType = typeWriterElement.getAttribute('data-text');
let charIndex = 0;

function type() {
    if (charIndex < textToType.length) {
        typeWriterElement.innerHTML += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(type, 80);
    }
}

setTimeout(type, 300);