$('.slider').slick({
    arrows: true,
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    cssEase: 'linear',
    prevArrow: "<div id='btn_prev'><img src='images/vectores/anterior.png'></div>",
    nextArrow: "<div id='btn_next'><img src='images/vectores/posterior.png'></div>"

  });
$('.slider_seccion').slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    cssEase: 'linear',
    prevArrow: "<div id='btn_prev'><img src='images/vectores/anterior.png'></div>",
    nextArrow: "<div id='btn_next'><img src='images/vectores/posterior.png'></div>"

  });

  $(document).ready(function(){
  if($(window).width() <= 800 ){
    $('.contenedor_cajas').slick({
      arrows: true,
      dots: false,
      infinite: true,
      speed: 1000,
      autoplay: true,
      cssEase: 'linear',
      prevArrow: "<div id='btn_prev'><img src='images/vectores/anterior.png'></div>",
      nextArrow: "<div id='btn_next'><img src='images/vectores/posterior.png'></div>"
  
    });
 
  }
});
  

 $(window).on("scroll", function () {
  if($(window).width() < 1079 ) {
    if ($(window).scrollTop() > $("#nosotros").offset().top -550) {
      $('#nosotros .caja_descripcion').removeClass('oculto');
      $('#nosotros ._imagen').removeClass('oculto');
      $('#nosotros .caja_imagen').addClass('slideLeft visible');
      $('#nosotros .caja_descripcion').addClass('slideRight visible');
    }  
  
  }else{
    if ($(window).scrollTop() > $("#nosotros").offset().top -150) {
        $('#nosotros .caja_descripcion').removeClass('oculto');
        $('#nosotros ._imagen').removeClass('oculto');
        $('#nosotros .caja_imagen').addClass('slideLeft visible');
        $('#nosotros .caja_descripcion').addClass('slideRight visible');
        
    }
  }
    }
  );

    $(window).on("scroll", function () {
      if($(window).width() < 1079) {
        if ($(window).scrollTop() > $("#contenedor_servicios").offset().top -550) {
        
          $('#servicios .caja').removeClass('oculto');
          $('#servicios .caja').addClass('zoomer visible');
      }
    }else{
      if ($(window).scrollTop() > $("#contenedor_servicios").offset().top -50) {
        
        $('#servicios .caja').removeClass('oculto');
        $('#servicios .caja').addClass('zoomer visible');
    }
      }
    });

        $(document).ready(function(){
          $('#iconomenu').click(function(){
          if($(window).width() < 1079) {
            $('#menu').slideToggle(200);

          $('#menu_inicio').click(function (){
              $('#menu').slideUp();
          });
          $('#menu_nosotros').click(function (){
                $('#menu').slideUp();
            });
          $('#menu_servicios').click(function (){
              $('#menu').slideUp();
          });
          $('#menu_testimonios').click(function (){
            $('#menu').slideUp();
          });
          $('#menu_clientes').click(function (){
            $('#menu').slideUp();
          });
          $('#menu_contacto').click(function (){
            $('#menu').slideUp();
          });
          

          }else{
          }
          });
        });
         $(window).resize(function() {
          if ($(window).width() < 1079) {
             $('#menu').css({
              "margin-top": "80px",
              "width": "50%",
              "height": "auto",
              "background-color": "white",
              "display": "none",
              "position": "absolute",
              "right": "0",
              "z-index": "2"
             });
            
          }else {
            $('#menu').css({
              "display": "flex",
              "flex-direction": "row",
              "margin-top": "0px",
              "background-color": "transparent",
              "width": "auto",
            });

         }
        });
        $(window).resize(function() {
          if($(window).width() <= 800 ){
            $('.contenedor_cajas').slick({
              arrows: true,
              dots: false,
              infinite: true,
              speed: 1000,
              autoplay: true,
              cssEase: 'linear',
              prevArrow: "<div id='btn_prev'><img src='images/vectores/anterior.png'></div>",
              nextArrow: "<div id='btn_next'><img src='images/vectores/posterior.png'></div>"
          
            });
          }else{
            $('.contenedor_cajas').css({
              "display": "flex",
            "flex-direction": "row",
            "justify-content": "center",
            "width": "90%",
            "margin-left": "auto",
            "margin-right": "auto",
            "z-index": "2",
            "height": "350px"
            });
          }
        });
        $(window).resize(function() {
          if(this.resizeTO) clearTimeout(this.resizeTO);
          this.resizeTO = setTimeout(function() {
             $(this).trigger('resizeEnd');
          }, 500);
       });
       $(window).bind("resizeEnd", function() {
        if($(window).width() <= 800 ){
          $('.contenedor_cajas').slick({
            arrows: true,
            dots: false,
            infinite: true,
            speed: 1000,
            autoplay: true,
            cssEase: 'linear',
            prevArrow: "<div id='btn_prev'><img src='images/vectores/anterior.png'></div>",
            nextArrow: "<div id='btn_next'><img src='images/vectores/posterior.png'></div>"
        
          });
        }else{
          $('.contenedor_cajas').slick("unslick");
        }
       });
       