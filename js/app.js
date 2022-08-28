document.querySelector('#nav-btn').addEventListener('click', () => menu());
document.querySelector('#nav').setAttribute('display', 'none');

/**
 * Controls the animation and position of the nav menu by adding and removing a class
 * @method
 */
function menu(){
    const nav = document.querySelector('#nav');
    if(nav.classList.contains('transform-nav')){
        nav.classList.remove('transform-nav');
        window.onscroll = () => {};
        navDisplay(false);
;    } else {
        nav.classList.add('transform-nav');
        disableScrolling();
        navDisplay(true);
    }
}

/**
 * 
 * @param {Boolean} navSwitch - dictates wether we are hiding or showing the navigation
 */
function navDisplay(navSwitch) {
    if(navSwitch){
        setTimeout(() => {
            document.querySelector('#nav').setAttribute('display', 'initial');;
        }, 6000);
    } else {
        setTimeout(() => {
            document.querySelector('#nav').setAttribute('display', 'none');;
        }, 6000);
    }
}

/**
 * This disables scrolling
 */
 function disableScrolling(){
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
    };
}