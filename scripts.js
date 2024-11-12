const form = document.querySelector(".formulario-fale-conosco");
const mascara = document.querySelector(".mascara-formulario");

function mostrarForm() {
    if (window.innerWidth > 1100) {
        form.style.left = "35%";
        form.style.transform = "translateX(50%)";
    } else {
        form.style.left = "10%";
    }
    mascara.style.visibility = "visible";
}

function esconderForm() {
    form.style.left = "-300%";
    form.style.transform = "translateX(0)";
    mascara.style.visibility = "hidden";
}