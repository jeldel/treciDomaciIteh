import './App.css';
import NavBar from './components/NavBar';
import MenuProduct from './components/MenuProduct';
import { useState } from 'react';

function App() {
  
  const[cartNum, setCartNum] = useState(0);

  const [products, setProducts] = useState([
    {
      id : 1,
      title: 'Cezar salata',
      price: 780,
      description : 'piletina, pančeta, tost, iceberg, dresing, parmezan, salata',
      quantity: 0
    },
    {
      id : 2,
      title: 'Pasta Carbonara',
      price: 675,
      description : 'pančeta, neutralna pavlaka, parmezan, jaje, beli luk, origano',
      quantity: 0
    },
    {
      id : 3,
      title: 'Pizza Capricciosa 32cm',
      price: 770,
      description : 'pelat, mocarela, šunka, pečurke, origano',
      quantity: 0
    },
    {
      id : 4,
      title: 'Pileći štapići u susamu',
      price: 780,
      description : 'pohovana piletina, susam, pomfrit, tartar sos',
      quantity: 0
    }
  ]);

  const addToCart = (id) => {
    products.map((product) => {
      if(product.id === id){
        product.quantity = product.quantity + 1;
        const a = cartNum + 1;
        setCartNum(a);
        alert("Uspešno ste dodali proizvod u korpu.")
      }
    }); 
  };

  const removeFromCart = (id) => {
    products.map((product) => {
      if(product.id === id){
        if(product.quantity > 0){
          product.quantity = product.quantity - 1;
          const a = cartNum - 1;
          setCartNum(a);
          alert("Uspešno ste ukolinili proizvod iz korpe.")
        }
        else{
          alert("Količina proizvoda je već 0.")
        }
      }
    });
  }



  return (
    <div className='App'>
    <NavBar cartNum = {cartNum} />
    <MenuProduct products={products} onAdd={addToCart} onRemove={removeFromCart} />
    </div>
  );
}

export default App;
