import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import CardData from "./data";

function App() {
  let cards = CardData.map(data => <Card img={data.img} rating={data.stats.rating} reviewCount={data.stats.reviewCount} country={data.country} title={data.title} price={data.price} />) 
  return (
    <div>
      <Navbar/>
      <Hero/>
      <section className='card--row'>
         {cards}
      </section>
     
    </div>
  );
}

export default App;
