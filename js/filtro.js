$(function () {
    $('.filter').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        $('.cont-work').not('.' + valor).hide();
        $('.cont-work').filter('.' + valor).show();
    });

    let nosotros = $('#nosotros').offset().top,
        productos = $('#productos').offset().top,
        sucursal = $('#sucursal').offset().top,
        contacto = $('#contacto').offset().top;

    window.addEventListener('resize', function(){
        let nosotros = $('#nosotros').offset().top,
        productos = $('#productos').offset().top,
        sucursal = $('#sucursal').offset().top,
        contacto = $('#contacto').offset().top;
    });

    $('#enlace-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },600);
    });

    $('#enlace-nosotros').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: nosotros -100
        },600);
    });

    $('#enlace-productos').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: productos -100
        },600);
    });
    
    $('#enlace-sucursal').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: sucursal -100
        },600);
    });

    $('#enlace-contacto').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto -50
        },600);
    });
});