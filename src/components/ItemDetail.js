import './ItemDetail.css';

export default function ItemDetail({ item }) {
  return (
    <div className='item'>
      <img src={item.imagenUrl} alt="Imagen del producto" />
      <div className='derecha-column'>
        <div>
          <h1>{item.titulo}</h1>
          <p className='precio'>USD {item.precio}</p>
          <p className='descripcion'>{item.descripcion}</p>
        </div>
        <button>Comprame</button>
      </div>
    </div>
  )
}
