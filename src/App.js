import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from "./data";

function App() {
  let cards = data.map(item => <Card key={item.id} {...item}/>)
  return (
    <div>
      <Navbar />
      <Hero />
      <section className='card--row'>
        {cards}
      </section>

    </div>
  );
}

export default App;
