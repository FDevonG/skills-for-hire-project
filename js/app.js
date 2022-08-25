document.querySelector('#nav-btn').addEventListener('click', () => menu());

function menu(){
    const nav = document.querySelector('#nav');
    if(nav.classList.contains('transform-nav')){
        nav.classList.remove('transform-nav');
    } else {
        nav.classList.add('transform-nav');
    }
}