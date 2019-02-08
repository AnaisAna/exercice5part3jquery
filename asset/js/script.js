$(function(){
  //On stocke la largeur et la hauteur de la fenêtre dans des variables
  //var un mot clé
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();

  //On stocke la largeur et la hauteur du carré dans des variables
  //('#square') c'est un selecteur  .width() c'est une fonction
  var squareWidth = $('#square').width();
  var squareHeight = $('#square').height();
  //Je met un évènement"keydown" sur mon Input.
  //Je met "event" en paramètre de ma fonction anonyme, grâce à ça je vais pouvoir récupérer la touche sur laquelle j'ai appuyé.
  //offset point de position

//event est un événement qui reprend keydown
  $('#direction').keydown(function(event){
    var squarePositionLeft = $('#square').offset().left;
    var squarePositionTop = $('#square').offset().top;
    //Switch est utilisé lorsque l'on veut comparer une variable à plusieurs valeurs
    switch (event.keyCode) {
      case 37: // gauche
        squarePositionLeft -= 10;
        //Toujours refermer avec break
      break;
      case 38: //haut
        squarePositionTop -= 10;
      break;
      case 39:// a droite
        squarePositionLeft += 10;
      break;
      case 40: //bas
        squarePositionTop += 10;
      break;
    }
    //si la carrer à gauche est inférieur à 0
    if(squarePositionLeft < 0){
      //alors la carrer à gauche, sa largueur de la fenetre - la largueur du carrer
squarePositionLeft = windowWidth - squareWidth;
  //si la carrer en hauteur est inférieur à 0
}else if(squarePositionTop < 0){
  //sinon si le carrer en haut est sa hauteur de la fenetre - la carrer en hauteur
squarePositionTop = windowHeight - squareHeight;
// sinon si la carrer de la position en hauteur  + le carrer en hauter est supérieur à la fenetre en hauteur
    }else if((squarePositionTop + squareHeight) > windowHeight){
      // alor la la carrer en hauter est = à 0
squarePositionTop =0;
// sinon si la carrer de la position en largueur  + le carrer en largueur est supérieur à la fenetre en largueur
    }else if((squarePositionLeft + squareWidth) > windowWidth){
      // alor la la carrer en largueur est = à 0
squarePositionLeft =0;
    }
  //On définit la position du carré grâce à la fonction "Offset".
  $('#square').offset({top : squarePositionTop, left : squarePositionLeft});
  });
});
