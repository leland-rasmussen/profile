const nav = document.querySelector('.nav')
nav.addEventListener('click', e => setActiveTab(e.target))
// function (e) {
//     setActiveTab(e.target)
// }

function setActiveTab(tab) {
    // Find the current active class and remove it
    const currentActiveTab = document.querySelector('.active-link')
    currentActiveTab.classList.remove('active-link')

    // set the new tab to have the active class
    tab.classList.add('active-link')

    //scroll to element
    const x = document.querySelector("." + tab.id)
    smoothScroll(x, 1)
}

function smoothScroll(target, duration) {
    const targetPosition = target.getBoundingClientRect().top
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    console.log(targetPosition)
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        console.log(run)
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t / + d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Theme toggle logic
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Check saved theme
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light');
  themeIcon.src = './images/moon.svg';
}

// Toggle theme on click
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');

  if (document.body.classList.contains('light')) {
    themeIcon.src = './images/moon.svg';
    localStorage.setItem('theme', 'light');
  } else {
    themeIcon.src = './images/sun.svg';
    localStorage.setItem('theme', 'dark');
  }
});
