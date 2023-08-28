const day = new Date();
    const today = day.getFullYear();
    
    console.log(today);
    
    const footerYear = document.getElementById("actual-footer-contact");
    footerYear.textContent = `COPYRIGHTⒸ ${today}`;

    
var currentPageUrl = window.location.href;

  
var navLinks = document.querySelectorAll('.navitem a');


for (var i = 0; i < navLinks.length; i++) {
    if (navLinks[i].href === currentPageUrl) {
        navLinks[i].parentNode.classList.add('active');
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toggle-button');
    const navList = document.querySelector('.navlist');

    toggleButton.addEventListener('click', function () {
        navList.classList.toggle('active');
    });
});

const linkedin=document.querySelector()