import '../App.css';


const Producto =({producto})=> {
  return (
    <div>
      
 
          <img
          style={{width:50}}
            src={require(`../../public/images/${producto.titulo}`)}
            alt="hola"
            key="1"
          />
        
      

    </div>
  );
}

export default Producto;
