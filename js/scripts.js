
let btnSubmit = document.getElementById("btnSubmit");
let txtNombre = document.getElementById("txtNombre");

txtNombre.addEventListener("blur", obtenerNombre);


btnSubmit.addEventListener("click", function(event){
    event.preventDefault();
    let nombre = txtNombre.value;

    if (nombre.trim() === "") {
        alert("El nombre no puede estar vacío.");
        return; //Se detiene por si el nombre esta vacio
    }
    // console.log("aqui esta el nombre", nombre);
    localStorage.setItem("Nombre",nombre);


    //Se agrega en el modal
    let modalBody = document.querySelector("#exampleModal .modal-body");
    modalBody.textContent = `Hola, ${nombre}`;

    //Se muestra el modal, aqui tuve que investigar porque no me aparecia el modal
    var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();
});//se guarda en el loca storage

function obtenerNombre(event){
    event.preventDefault();
    event.target.value = event.target.value.trim().replace(/\s+/g, ' ');
    // console.log("funciono")
}//hace el trim y solo deja que haya un espacio entre los nombres y apellidos
