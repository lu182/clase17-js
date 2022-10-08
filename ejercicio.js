console.clear()
/* Armar un array de objetos, donde cada objeto sea un producto distinto (mínimo 5 productos). 
Puede tener las claves/keys que deseen (mínimo 2). Todos los productos deben tener las mismas keys.*/
/* Crear una función que permita AGREGAR, MODIFICAR y ELIMINAR productos por Prompt y MOSTRAR todos 
los productos por pantalla */

let opcion = null;

function inicio(){
    opcion = Number(prompt(`Ingresa una opción: 
    1. Mostrar Productos
    2. Agregar un Producto
    3. Modificar un Producto
    4. Eliminar un Producto
    5. Cerrar el programa`))

    validarOpciones(opcion);    
}

function validarOpciones(opcionUser){ 
    switch(opcionUser){
        case 1:
            mostrarProductos()
            inicio()
            break;
        case 2:
            agregarProducto()
            inicio()
            break;
        case 3:
            modificarProducto()
            inicio()
            break;
        case 4:
            eliminarProducto()
            inicio()
            break;
        case 5:
            window.close()
            break;
        default:
            alert('Opción incorrecta. Debe elegir alguna de las opciones del 1 al 5.')
            inicio()
            break;  
    }    
}

inicio()
