const trailer = document.getElementById('trailer');

const animateTrailer = (e, interacting) => {
    trailer.animate({
        left: `${e.clientX-10}px`,
        top: `${e.clientY-10}px`,
        transform: `scale(${interacting ? 4 : 1})`,
    },{
        duration: 800,
        fill: 'forwards',
        easing: 'ease',
    });
}

const getTrailerClass = (type) => {
    switch(type){
        case "insta":
            return "fa-brands fa-instagram";
        default:
            return "fa-brands fa-youtube"
    }
}

document.addEventListener('mousemove', (e) => {
    const interactable = e.target.closest('.interactable'),
    interacting = interactable !== null;

    animateTrailer(e, interacting);

    const icon = document.getElementById('trailer-icon');

    if(interacting){
        icon.className = getTrailerClass(interactable.dataset.type)
    }
    else{
        icon.classList = '';
    }
});