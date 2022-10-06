console.clear()
/* Armar un array de objetos, donde cada objeto sea un producto distinto (mínimo 5 productos). Puede tener las claves/keys que deseen (mínimo 2). Todos los productos deben tener las mismas keys. */
/* Crear una función que permita AGREGAR, MODIFICAR y ELIMINAR productos por Prompt y MOSTRAR todos los productos por pantalla */

const productos = [
{
    id: 1,
    nombre: 'Notebook Lenovo',
    precio: 100000    
},
{
    id: 2,
    nombre: 'Parlantes Genius',
    precio: 4900      
},
{
    id: 3,
    nombre: 'Mouse inalámbrico',
    precio: 2500      
},
{
    id: 4,
    nombre: 'Hub Usb 3.0',
    precio: 1500      
},
{
    id: 5,
    nombre: 'Mouse Pad Desk',
    precio: 1980      
}
]

let opcion = null;

function inicio(){
    opcion = Number(prompt('Ingresa una opción:' + '\n' + '1. Mostrar Productos' + '\n' + '2. Agregar un Producto'+ '\n' + '3. Modificar un Producto' + '\n' + '4. Eliminar un Producto' + '\n' + '5. Cerrar el programa'))
    validarOpciones(opcion)    
}

inicio()


function mostrarProductos(){
    let productosPorAlert = '';

    productos.forEach(p =>{
        productosPorAlert += ('Id: ' + p.id + '     Producto: ' + p.nombre + '     Precio: ' + p.precio + '\n' + '\n')
    })

    alert('\n' + 'TOTAL DE PRODUCTOS:' + '\n' + productosPorAlert)
    
}


function agregarProducto(){
    let id = Number(prompt('Ingrese el Id del Producto'))
    let nombre = prompt('Ingrese el nombre del Producto')
    let precio = Number(prompt('Ingrese el precio del Producto'))     

    let existeId = false;

    for(let p in productos){
        if(productos[p].id === id){
            existeId = true;
        }
    }   
    

    if(!id || !nombre || !precio){
        alert('Los datos ingresados son incorrectos') 
    }else if(!existeId){
        productos.push({id, nombre, precio})
        alert('Producto agregado correctamente');
    }else{
        alert('ID duplicado, pruebe con otro') 
    }    
}


function modificarProducto(){    
    let productosPorAlert = '';

    productos.forEach(p =>{
        productosPorAlert += ('Id: ' + p.id + '     Producto: ' + p.nombre + '     Precio: ' + p.precio + '\n' + '\n')
    })    

    let id = Number(prompt('Ingrese el ID del Producto a modificar:' + '\n' + '\n' + 'PRODUCTOS:' + '\n' + productosPorAlert))
    
    productos.forEach(p =>{
        if(p.id === id){
            let nombre = prompt('Ingrese el nuevo nombre del Producto:')
            let precio = Number(prompt('Ingrese el nuevo precio del Producto:'))
            p.nombre = nombre, p.precio = precio;
            alert('Producto modificado con éxito')
        }
    })
}


function eliminarProducto(){
    let productosPorAlert = '';

    productos.forEach(p =>{
        productosPorAlert += ('Id: ' + p.id + '     Producto: ' + p.nombre + '     Precio: ' + p.precio + '\n' + '\n')
    })    

    let id = Number(prompt('Ingrese el ID del Producto a eliminar:' + '\n' + '\n' + 'PRODUCTOS:' + '\n' + productosPorAlert))      

    /*
    VER:
    productos.forEach(p =>{        
        let index = p.indexOf(productos[p].id) 
        if(index > -1){
            p.splice(index, 1)
        }
        alert('Producto eliminado correctamente')
    })
    */        
    
    //VER: 
    //productos.splice(0, p.id) //a partir de la posicion 0, eliminame el id que pasó el Usuario.
        
    // VER: elimina OK el ultimo elemento del array. Ver cómo eliminar un elemento aleatorio del Array segun el ID.
        //productos.pop(id);    
    
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
