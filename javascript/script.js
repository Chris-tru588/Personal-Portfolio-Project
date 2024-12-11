/* 
    Chris Trujillo 
    styles.css
    12/010/24
*/

function showSideBar() {
    const menulinks = document.querySelector('.menu-links');
    const navicon = document.querySelector('.nav-icon');

    menulinks.style.display = 'flex';
    navicon.style.display = 'none';
}

function closeSideBar() {
    const menulinks = document.querySelector('.menu-links');
    const navicon = document.querySelector('.nav-icon');

    menulinks.style.display = 'none';
    navicon.style.display = 'block';
}

// Take user to top of screen 
const backToTop = () => window.scrollTo({top: 0, behavior: 'smooth'});
