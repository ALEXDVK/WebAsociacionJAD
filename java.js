const botonizq = document.querySelector(".boton-izq"),
      botonder = document.querySelector(".boton-der"),
      slider = document.querySelector("#sliderjava"),
      sliderSection = document.querySelectorAll(".slider--inner") ;

botonizq.addEventListener("click", e => moverizquierda())
botonder.addEventListener("click", e => moverderecha())

setInterval(() => {
    moverderecha ()
},100);

let operacion = 0,
counter = 0,
withImg = 100 / sliderSection.length;

function moverderecha(){
    if (counter >= sliderSection.length-1){
        counter = 0 ;
        operacion = 0 ;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none"
        return;
    }
    counter++;
    operacion = operacion + withImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
    
}
function moverizquierda(){ 
    if(counter < 0 ) {
        counter = sliderSection.length-1;
        operacion = withImg * (sliderSection.length-1)
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none"
        return;
    } 
    counter--;
    operacion = operacion - withImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"

}

