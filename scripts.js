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
}