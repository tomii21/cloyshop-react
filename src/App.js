import './App.css';
/* import productos from './data'; */
import ListaProductos from './componentes/lista_productos';
import {useEffect, useState} from 'react';
function App () {
  const [url, setUrl] = useState ([]);
  useEffect (() => {
    const getUrl =() => {
      fetch ('http://localhost:3000')
      .then(response=> response.json())
      .then(data=>setUrl(data))
      .catch(err=>(console.log(err)))
      
    };
    getUrl()
  }, []);
  console.log(url)
  return (
    <div className="App">
      <ListaProductos productos={url} />

    </div>
  );
}

export default App;
