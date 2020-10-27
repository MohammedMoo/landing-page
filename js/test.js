/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to aanchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standrd: ESlint
 * 
 */


//  Define Global Variables
let list = document.getElementById("navbar__list");
let sections = document.querySelectorAll('section');


// bar
for(i = 0 ; i < 4; i++){
    let a = document.createElement('a');
    a.setAttribute('href', 'javascript:void(0)');
    a.setAttribute('id' , 'but' + (i + 1));
    a.innerText = `Sectan ${i+1}`;
    let orderlist = document.createElement('li');
    orderlist.classList.add('menu__link')
    orderlist.classList.add(`section${i+1}-link`);
    orderlist.appendChild(a);
    list.appendChild(orderlist);
}
/**
 * Define Global Variables
 * 
*/
let but1 = document.getElementById("but1");
let but2 = document.getElementById("but2");
let but3 = document.getElementById("but3");
let but4 = document.getElementById("but4");
const header = document.querySelector('.page__header');
/**
 * End Global Variables
 * Start Helper Functions
 * 
 */

/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */
let removeClass = () =>{
    for(i = 0 ; i < 4 ; i++){sections[i].classList.remove('your-active-class')}
}
let addClass = (input) => {
    sections[input].classList.add('your-active-class'); 
    sections[input].scrollIntoView({behavior : 'smooth'})
    console.log(sections[input].scrollIntoView({behavior : 'smooth'}));
    console.log(sections[input]);
    console.log(sections[input].scrollIntoView);
}


/**
 * End Main Functions
 * Begin Events
 * 
 */

but1.addEventListener('click', () => {
    removeClass();
    addClass(0);});
but2.addEventListener('click', () => {
    removeClass();
    addClass(1);});
but3.addEventListener('click', () => {
    removeClass();
    addClass(2);});
but4.addEventListener('click', () => {
    removeClass();
    addClass(3);});





// Set sections as active

document.addEventListener('scroll', () => {
    let oldScroll = window.scrollY;
    if (oldScroll > 0) {
        setTimeout(() => {
            
            if (oldScroll == window.scrollY) {
                header.classList.add('fade-out');

            } else {
                oldScroll = window.scrollY;
                header.classList.remove('fade-out');
                
            }
            
        }, 100);
        
    }

    if (window.scrollY > header.scrollHeight) {
        header.classList.add('fade-out');
    } else {
        header.classList.remove('fade-out');
    }

    sections.forEach((section, index) => {
        let navLink = section.dataset.navLink;

        let rect = section.getBoundingClientRect();
        
        let isInViewport = rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth;
        
        
        if (isInViewport) {
            removeClass();
            addClass(index)
            document.querySelectorAll('.menu__link').forEach(link => {
                link.classList.remove('active')

            })

            document.querySelector(navLink).classList.add('active')
        } 
        
    });
});

header.addEventListener('mouseover', function () {
    this.classList.remove('fade-out');
});

header.addEventListener('mouseleave', function () {
    this.classList.add('fade-out');
});
