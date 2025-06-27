// Typing effect for the intro headline
const typewriterElem = document.getElementById('typewriter');
const lines = [
    "Hi, I'm <span style='color:#4cc9f0'>[Your Name]</span> 👋",
    "Creative Developer & Designer",
    "Welcome to My Dynamic Portfolio!"
];
let lineIndex = 0, charIndex = 0, typing = true;

function typeLine() {
    if (lineIndex >= lines.length) {
        lineIndex = 0;
    }
    const line = lines[lineIndex];
    if (charIndex < line.length) {
        typewriterElem.innerHTML = line.substring(0, charIndex + 1) + '<span class="blinking-cursor">|</span>';
        charIndex++;
        setTimeout(typeLine, Math.random() * 60 + 30);
    } else {
        typewriterElem.innerHTML = line;
        setTimeout(() => {
            typing = false;
            setTimeout(eraseLine, 1300);
        }, 950);
    }
}
function eraseLine() {
    const line = lines[lineIndex];
    if (charIndex > 0) {
        typewriterElem.innerHTML = line.substring(0, charIndex - 1) + '<span class="blinking-cursor">|</span>';
        charIndex--;
        setTimeout(eraseLine, 18);
    } else {
        lineIndex++;
        typing = true;
        setTimeout(typeLine, 250);
    }
}
typeLine();

// Fade-in for sections on scroll
function revealSections() {
    const sections = document.querySelectorAll('.animated-section');
    const windowBottom = window.innerHeight + window.scrollY;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        if (windowBottom > sectionTop + 80) {
            section.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

// Theme toggle (light/dark)
const toggleBtn = document.getElementById('theme-toggle');
let isDark = true;
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    isDark = !isDark;
    toggleBtn.innerText = isDark ? "🌙" : "☀️";
});

// Blinking cursor for typewriter
const style = document.createElement('style');
style.innerHTML = `
.blinking-cursor {
    display: inline-block;
    width: 9px;
    animation: blink 1.03s infinite;
    color: #ffd600;
    font-weight: bold;
}
@keyframes blink {
    0%, 49% { opacity: 1; }
    50%, 100% { opacity: 0; }
}
`;
document.head.appendChild(style);