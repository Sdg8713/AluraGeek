const listaProductos = () =>  fetch("https://api-alurageek-173o.onrender.com/producto").then((respuesta) => respuesta.json());



const crearProducto = (name,imageURL,price,id,category) => {
    return (`https://api-alurageek-173o.onrender.com/producto`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            imageURL,
            price,
            name,
            id,
            category
        })
    }).then(respuesta => {
        if(respuesta.ok){
            return respuesta.body
        }
    })
    throw new Error("No se pudo crear el producto")
}


export const productosServicios = {
    listaProductos,
    crearProducto,
}