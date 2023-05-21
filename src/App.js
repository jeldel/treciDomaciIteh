import './App.css';
import NavBar from './components/NavBar';
import MenuProduct from './components/MenuProduct';
import Cart from './components/Cart';
import Contact from './components/Contact';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  
  const[cartNum, setCartNum] = useState(0);

  const[cartProducts, setCartProducts] = useState([]);

  const refreshCart = () => {
    const newProducts = products.filter((product) => product.quantity > 0);
    setCartProducts(newProducts);
  };

  const updateCart = (product) => {
    setCartProducts([...cartProducts,
    {
      id : product.id,
      title : product.title,
      description : product.description,
      quantity : product.quantity,
      price : product.price
    }]);
  };

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
        if(product.quantity === 1){
          updateCart(product);
        }
        else{
          refreshCart();
        }
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
          refreshCart();
          alert("Uspešno ste ukolinili proizvod iz korpe.")
        }
        else{
          alert("Količina proizvoda je već 0.")
        }
      }
    });
  }



  return (
    <BrowserRouter>
      <NavBar cartNum = {cartNum} />
      <Routes>
        <Route
          path = '/'
          element = {
            <MenuProduct products={products} onAdd={addToCart} onRemove={removeFromCart} />
          }
          />
        <Route path='/cart' element = {<Cart cartProducts = {cartProducts} />} />
        <Route path='/contact' element = {<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
