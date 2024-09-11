import './app.css';
import { PetToys } from '@pets-demo/pet-toys';
import Beanie from '../assets/cranston.jpeg';

export function App() {
  const cranstonToys = ['Feathers on a stick', 'Cardboard Box', 'Shoe Box'];
  return (
    <div className="container">
      <div className="header">
        <h1 className="title"> Welcome Beanie 👋 </h1>
        <img className="pet-pic" src={Beanie} alt="beanie" />
      </div>
      <PetToys toys={cranstonToys} />
    </div>
  );
}

export default App;
