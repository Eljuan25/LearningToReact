import './App.css';
import { useState } from 'react';






const products = [
  { id: 1, name: 'Manzana', isFruit: true },
  { id: 2, name: 'Cebolla', isFruit: false },
  { id: 3, name: 'Fresa', isFruit: true },
  { id: 4, name: 'Sandia', isFruit: true },
  { id: 5, name: 'Gitomate', isFruit: false },
];

const user = {
  name: 'Juan Mendoza',
  imageUrl: './assets/imagen.png',
  imageSize: 90,
};

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className='avatar'
        src={user.imageUrl}
        alt={'foto de ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}




function MyButton() {
  return (
    <button> Soy un botón </button>
  );
}


function ProductList() {
  const listItems = products.map(product =>
    <li key={product.id} style={{ color: product.isFruit ? 'magenta' : 'darkgreen' }}>
      {product.name}
    </li>
  );
  return <ul>{listItems}</ul>;
}



function MyBuut (){
  function handleClick() {
    alert('!Me Corrrooo!');
  }
  return (
    <button onClick={handleClick}>
      Hazme Click

    </button>

  );
}


function Mybuu ({count,onClick}){
  return(
    <button onClick={onClick}>

    Hicisite click {count} más de dosveces 
    </button>
  );
  
}

export default function MyApp() {

  const [count, setCount] = useState(0);
  function hendleClick(){
    setCount(count + 1);  
  }
  

  return (
    <div>





      <h1>Bienvenido a mi aplicación</h1>
      <Profile />
      <br />
      <MyButton />

      <p>hola. <br /> ¿cómo vas en esto?</p>
        <ProductList />

    <MyBuut />
    <Mybuu count={count} onClick={hendleClick} />
    <Mybuu count={count} onClick={hendleClick} />
    
    </div>
  );
}
