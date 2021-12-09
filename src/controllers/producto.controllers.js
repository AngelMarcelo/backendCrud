import { restart } from "nodemon";

const productoCtrl ={};

//logica para obtener la lista de productos
productoCtrl.listarProductos = (req,res)=>{
    res.send('listar productos')
}


productoCtrl.borrarProductos =(req, res) =>{
    res.send('aqui borro los productos')
}

productoCtrl.crearProductos =(req, res) =>{
    console.log(req);
    console.log(req.body)
    res.send('crear productos aqui')
}

export default productoCtrl