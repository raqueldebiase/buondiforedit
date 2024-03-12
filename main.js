/* Menu hamburguer onclick*/

$('#clicarParaAbrirMenu').on('click', function(){
  const menuHamburguer = $("#abaMenuHamburguer");
  if (menuHamburguer.hasClass('menuDisplayNone')){
    $('#abaMenuHamburguer').removeClass('menuDisplayNone');
  } else {
    $('#abaMenuHamburguer').addClass('menuDisplayNone');
  }
  event.preventDefault();
});


/* Mostrar DIV dia 10*/

$("#diaClicavel").each(function(){
  $(this).on('click', function(){
    const dia10 = $("#idDia10");
    if (dia10.hasClass('dia10')){
      $('#idDia10').removeClass('dia10');
    } else {
      $('#idDia10').addClass('dia10');
    }
    event.preventDefault();
  });
});

/*SCROLL LINE UP*/


(function(){
let $target = $('#desporto'),
    animationClass = 'artistaStart';

  function animeScroll(){
  var documentTop = $(document).scrollTop();
  console.log(documentTop);
  
  $target.each(function() {
    var itemTop = $(this).offset().top;
    if(documentTop > itemTop-200){
      console.log('adicionando')
      $(this).addClass('artistaStart');
    } else {
      console.log('removendo')
      $(this).removeClass('artistaStart');
    }
  })
}

animeScroll();

$(document).scroll(function(){
  animeScroll();
})

}());

(function(){
  let $target = $('#musica'),
      animationClass = 'artistaStart';
  
    function animeScroll(){
    var documentTop = $(document).scrollTop();
    console.log(documentTop);
    
    $target.each(function() {
      var itemTop = $(this).offset().top;
      if(documentTop > itemTop-200){
        console.log('adicionando')
        $(this).addClass('artistaStart');
      } else {
        console.log('removendo')
        $(this).removeClass('artistaStart');
      }
    })
  }
  
  animeScroll();
  
  $(document).scroll(function(){
    animeScroll();
  })
  
  }());

  (function(){
    let $target = $('#musica2'),
        animationClass = 'artistaStart';
    
      function animeScroll(){
      var documentTop = $(document).scrollTop();
      console.log(documentTop);
      
      $target.each(function() {
        var itemTop = $(this).offset().top;
        if(documentTop > itemTop-200){
          console.log('adicionando')
          $(this).addClass('artistaStart');
        } else {
          console.log('removendo')
          $(this).removeClass('artistaStart');
        }
      })
    }
    
    animeScroll();
    
    $(document).scroll(function(){
      animeScroll();
    })
    
    }());

    (function(){
      let $target = $('#humor'),
          animationClass = 'artistaStart';
      
        function animeScroll(){
        var documentTop = $(document).scrollTop();
        
        $target.each(function() {
          var itemTop = $(this).offset().top;
          if(documentTop > itemTop -200){
            $(this).addClass('artistaStart');
          } else {
            $(this).removeClass('artistaStart');
          }
        })
      }
      
      animeScroll();
      
      $(document).scroll(function(){
        animeScroll();
      })
      
      }());



/*

let desporto = document.getElementById("desporto");
let musica = document.getElementById("musica");
let musica2 = document.getElementById("musica2");
let humor = document.getElementById("humor");

window.addEventListener('scroll', function(){
  var value=this.window.scrollY;

  desporto.style.top = value * 5.0 + 'px';
  musica.style.top = value * 0.5 + 'px';
  musica2.style.top = value * 0.5 + 'px';
  humor.style.top = value * 0.5 + 'px';
})
*/




/* Aumentar, diminuir span*/
function aumenta(obj){
    obj.height=obj.height*1.1;
    obj.width=obj.width*1.1;
}

function diminui(obj){
    obj.height=obj.height/1.1;
    obj.width=obj.width/1.1;
}

/*slick banner valores*/





