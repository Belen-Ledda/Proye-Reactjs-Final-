import './Item.css';

import { Link } from 'react-router-dom';

export default function Item({ item }) {
  return (
    <div className='item-container'>
      <Link to={`/producto/${item.id}`}>
        <img src={item.imagenUrl} alt="Imagen del artículo" />
        <div className='detail-container'>
          <p className='item-precio'>$ {item.precio}</p>
          <p className='item-titulo'>{item.titulo}</p>
        </div>
      </Link>
    </div>
  );
}
