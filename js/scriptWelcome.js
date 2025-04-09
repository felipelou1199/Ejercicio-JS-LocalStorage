let encabezado1 = document.getElementsByTagName("h1").item(0);
let btnId = document.getElementById("btnId");

if(localStorage.getItem("Nombre") != null){
    let nombre = localStorage.getItem("Nombre");
    encabezado1.innerText = `Hola, ${nombre} bienvenido/a de nuevo`; 
}

btnId.addEventListener("click", function(event){
    event.preventDefault();
    let nombre = localStorage.getItem("Nombre");
    let modalBody = document.querySelector("#exampleModal .modal-body");
    modalBody.textContent = `Se ha borrado, ${nombre} del local storage`;
    localStorage.removeItem("Nombre");

    //Sse muestra el modal de borrado
    var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();
});//se borra del local storage


