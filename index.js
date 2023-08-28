
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
const h2Element = document.querySelector('.hero-text h2');
const options = ["an Electronics Engineer", "a Developer", "an AI Enthusiast"];
let index = 0;

function changeH2Content() {
    h2Element.classList.add('hidden'); // Hide the element
    setTimeout(() => {
        index = (index + 1) % options.length;
        h2Element.textContent = ` ${options[index]}`; // Update the text
        h2Element.classList.remove('hidden'); // Show the element
    }, 500); // Wait for the animation duration
}

// Initial call and interval
changeH2Content();
setInterval(changeH2Content, 1500);



    window.addEventListener('load', function () {
        const image = document.getElementById('me');
        const container = document.querySelector('.container');

        function setContainerHeight() {
            const imageHeight = image.clientHeight;
            container.style.minHeight = `${imageHeight}px`;
        }

        setContainerHeight();
        window.addEventListener('resize', setContainerHeight);
    });


    const day = new Date();
    const today = day.getFullYear();
    
    console.log(today);
    
    const footerYear = document.getElementById("actual-footer");
    footerYear.textContent = `COPYRIGHTⒸ ${today}`; // Use backticks (`) for template literals
    

