function validar(){
    var nombre, apellido, Email, expresion;
    nombre = document.getElementById('nombre').Value;
    apellido = document.getElementById('apellido').Value;
    Email = document.getElementById('E-mail').Value;

    if(nombre=== '' || apellido=== '' || Email=== ''){
        alert('Todos los campos son Obligatorios');
        return false;
    } 
}