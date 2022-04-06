let bars = document.querySelector('.menu .bars');
let menu = document.querySelector('.menu');
let enlace = document.querySelectorAll('.menu ul li a');


bars.addEventListener('click', ()=>{
    menu.classList.toggle('activo');
    
})


enlace.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        menu.classList.remove('activo');
    })
})

window.addEventListener('scroll' , ()=>{
    let scroll = window.scrollY;

    if (scroll > 5) {
        menu.style.background = 'rgb(14, 32, 42)';
        menu.style.transition = 'all .3s';
    }else{
        menu.style.background = 'transparent';

    }



    menu.classList.remove('activo')
})

