import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { getItems } from '../api';
import { useParams } from 'react-router-dom';

export default function ItemListContainer({ greetings }) {
  const [itemsList, setItemsList] = useState([]);
  const { categoryName } = useParams();
  useEffect(() => {
    getItems().then((items) => {
      if (!categoryName) {
        setItemsList(items);
      } else {
        const itemsPorCategoria = items.filter((producto) => {
          return producto.categoria === categoryName;
        });
        setItemsList(itemsPorCategoria);
      }
    })//.catch((error) => {
      //console.log(error);
    //});
}, [categoryName]);
function onAddItem(itemCount) {
    console.log(itemCount);
  }
return (
    <div>
      <h1>{greetings}</h1>
{
        itemsList.length === 0 ? 
          <p>Cargando productos...</p> : 
          <ItemList items={itemsList} />
      }

    </div>
  )
}
