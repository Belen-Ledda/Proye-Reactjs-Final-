const items = [
  { 
    id: 1,
    titulo: 'Potus',
    descripcion: 'La planta más facil de cuidar en el mundo 🌿',
    precio: 3,
    imagenUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkyqNAF7MdEbB-9OKSEMtvdUlw75XHkSyN_w&usqp=CAU',
    categoria: 'plantas',
    stock:5,
  },
  { 
    id: 2,
    titulo: 'oreja de elefante ',
    descripcion: 'Decorá con naturaleza tu hogar 🪴 ',
    precio: 12,
    imagenUrl: 'data:image/jpeg;base64,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',
    categoria: 'plantas',
    stock:5,
  },
  { 
    id: 3,
    titulo: 'Sustrato para maceta',
    descripcion: 'La mejor tierra para tener tus plantas felices 😊',
    precio: 7,
    imagenUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTISyZShg1rUyvn-MceAPP6nYFxiFDBIGyFaw&usqp=CAU',
    categoria: 'tierra',
    stock:5,
  },
  {
    id: 4,
    titulo: 'Macetas',
    descripcion: 'La casita de tus plantas',
    precio: 1,
    imagenUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXpudY-o-UBs4MQnFkHz4X0x5zIpyVRew8hg&usqp=CAU',
    categoria: 'macetas',
    stock:5,
  }
]
//Backend
function getItems() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(items);
    }, 500)
  });
}
export {
  getItems,
}
