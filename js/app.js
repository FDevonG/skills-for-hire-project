document.querySelector('#nav-btn').addEventListener('click', () => menu());

/**
 * Controls the animation and position of the nav menu by adding and removing a class
 * @method
 */
function menu(){
    const nav = document.querySelector('#nav');
    if(nav.classList.contains('transform-nav')){
        nav.classList.remove('transform-nav');
    } else {
        nav.classList.add('transform-nav');
    }
}