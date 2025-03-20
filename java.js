document.addEventListener("DOMContentLoaded", function() {
    console.log("Página cargada correctamente");
    
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            console.log("Navegando a: " + this.href);
        });
    });
});
