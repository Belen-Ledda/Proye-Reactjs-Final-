import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import { getItems } from '../api/index';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {
  const [item, setItem] = useState();
  const { productId } = useParams();

  useEffect(() => {
    getItems().then((items) => {
      const item = items.find((i) => i.id === Number(productId));
      setItem(item);
    }).catch((error) => {
      console.log(error);
    });
  }, [productId]);

  return (
    <div>
      {!item ? <p>Cargando producto...</p> :  <ItemDetail item={item} />}
    </div>
  )
};
