// Variables

let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');
let abrir = document.getElementById('open');
let botones = document.getElementsByClassName('btn-header');
let cerrado = true;

function menus(){
    let Desplazamiento_Actual = window.pageYOffset;

    if(Desplazamiento_Actual <= 300){
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        nav.style.transition = '1s';
        menu.style.top = '80px';
        abrir.style.color = '#fff';
    }else{
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        nav.style.transition = '1s';
        menu.style.top = '80px';
        abrir.style.color = '#000';
    }
}

function apertura(){
    if(cerrado){
        menu.style.width = '100vw';
        cerrado = false;
    }else{
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        cerrado = true;
    }
}

window.addEventListener('click',function(e){
    if(cerrado==false){
        let span = document.querySelector('span');
        if(e.target !== span && e.target !== abrir){
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            cerrado = true;
        }
    }
});
window.addEventListener('scroll', function(){
    menus();
    let animacionNosotrosImg =document.getElementById('animacionNosotrosImg');
    let positionObj1 = animacionNosotrosImg.getBoundingClientRect().top;
    let tamañoPantalla = window.innerHeight;
    let animacionNosotrosText =document.getElementById('animacionNosotrosText');
    let positionObj2 = animacionNosotrosText.getBoundingClientRect().top;

    let animacionSucursalImg =document.getElementById('animacionSucursalImg');
    let positionObj3 = animacionSucursalImg.getBoundingClientRect().top;
    let animacionSucursalText =document.getElementById('animacionSucursalText');
    let positionObj4 = animacionSucursalText.getBoundingClientRect().top;

    if(positionObj1 < tamañoPantalla){
        animacionNosotrosImg.style.animation = 'left-move 1s ease-in';
    }
    if(positionObj2 < tamañoPantalla){
        animacionNosotrosText.style.animation = 'right-move 1s ease-in';
    }

    if(positionObj3 < tamañoPantalla){
        animacionSucursalImg.style.animation = 'left-move 1s ease-in';
    }
    if(positionObj4 < tamañoPantalla){
        animacionSucursalText.style.animation = 'right-move 1s ease-in';
    }
});
window.addEventListener('resize', function(){
    if(screen.width>= 700){
        cerrado = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
});
abrir.addEventListener('click', function(){
    apertura();
});