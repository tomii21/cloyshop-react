import '../App.css';
import Producto from "./producto"
const ListaProductos =(productos)=> {
 console.log(productos); 
  return (
    <div>

    {
            productos.productos.map(prod=>{
                return(
                    <Producto producto={prod} key={prod.id}/>
                )
            })
        }  

    </div>
  );
}

export default ListaProductos;
