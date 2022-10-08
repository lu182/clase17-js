function mostrarProductos(){
    let productosPorAlert = '';

    productos.forEach(p =>{
        productosPorAlert += (`Id: ${p.id}     Producto: ${p.nombre}     Precio: ${p.precio}\n`)
    })

    alert(`TOTAL DE PRODUCTOS: \n ${productosPorAlert}`)
    
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
    
    let id = Number(prompt('Ingrese el ID del Producto a modificar:'))
    
    productos.forEach(p =>{
        if(p.id === id){
            let nombre = prompt('Ingrese el nuevo nombre del Producto:')
            let precio = Number(prompt('Ingrese el nuevo precio del Producto:'))
            p.nombre = nombre, p.precio = precio;
            alert('Producto modificado con éxito')
        }else if(!p.id === id){
            alert('No existe ese ID. Pruebe con otro') //VER: funciona ok pero no muestra el alert
        }
    })    
}


function eliminarProducto(){
    
    let id = Number(prompt('Ingrese el ID del Producto a eliminar:')) 
        
    for (let i = 0; i < productos.length; i++) {
        if(productos[i].id === id){
            productos.splice(i, 1);
            alert('Producto eliminado con éxito')
        }else if(!productos[i].id === id){
            alert('No existe ese ID. Pruebe con otro') //VER: funciona ok pero no muestra el alert
        }
    }
    
}