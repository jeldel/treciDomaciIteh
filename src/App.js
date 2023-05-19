import './App.css';
import NavBar from './components/NavBar';
import MenuProduct from './components/MenuProduct';

function App() {

  const products = [
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

  ];

  return (
    <div className='App'>
    <NavBar />
    <MenuProduct products={products} />
    </div>
  );
}

export default App;
