document.addEventListener("DOMContentLoaded", () => {
    const elementosCarrusel=document.querySelectorAll(".carousel");
    M.Carousel.init(elementosCarrusel, {
        duration:150,
        shift: 0,
        dist:-80,
        padding:5,
        numVisible:3,
        indicators: true,
        nowrap: false ,
    
        

    });
}); 