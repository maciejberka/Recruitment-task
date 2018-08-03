const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', function(){
    
    if(!nav.classList.contains('nav-visible')){
        nav.classList.add('nav-visible');
        hamburger.classList.add('hamburger-animation')
    } else {
        nav.classList.remove('nav-visible');
        hamburger.classList.remove('hamburger-animation')
    }
    
})
