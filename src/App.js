import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Katie from "./images/katie-zaferes.png";
import Wedding from "./images/wedding-photography.png";
import Mountain from "./images/mountain-bike.png";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Card img={Katie} rating="5.0" reviewCount={6} country="USA" title="Life lessons with Katie Zaferes" price={136}/>
      <Card img={Wedding} rating="5.0" reviewCount={30} country="USA" title="Learn wedding photography" price={125}/>
      <Card img={Mountain} rating="4.8" reviewCount={2} country="USA" title="Group Mountain Biking" price={50}/>
    </div>
  );
}

export default App;
