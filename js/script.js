 // Funcion que aplica el estilo a la opcion selaccionada en el menu y quita la previamente seleccionada
 function seleccionar(link) {
    let opciones = document.querySelectorAll('#links a');
    opciones[0].className = '';
    opciones[1].className = '';
    opciones[2].className = '';
    opciones[3].className = '';
    opciones[4].className = '';
    link.className = 'seleccionado';

    // Hacer desapecer el menu una ves que se a seleccionado una opcion en el modo reponsive
    let x = document.getElementById('nav');
    x.className = '';
 }

 // Funcion que muestra el menu responsive
 function responsiveMenu() {
    let x = document.getElementById('nav');
    if (x.className === '') {
        x.className = 'responsive';
    } else {
        x.className = '';
    }
 }

// Detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function() {
    efectoHabilidades();
}

// Funcion que le aplica la animacion a la barra de habilidades
function efectoHabilidades() {
    let = skills = document.getElementById('skills');
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById('html').classList.add('barra-progreso1');
        document.getElementById('js').classList.add('barra-progreso2');
        document.getElementById('nj').classList.add('barra-progreso3');
        document.getElementById('bd').classList.add('barra-progreso4');
    }
}
