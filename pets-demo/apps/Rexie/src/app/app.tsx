import './app.css';
import { PetToys } from '@pets-demo/pet-toys';
import  Rexie from '../assets/Rexie.jpg'

export function App() {
  const miloToys = [
    'Ball',
    'Socks',
    'Stuffed Hedgehog',
    'Cardboard Box',
    'Stuffed Dino',
  ];
  return (
    <div className="container">
      <div className="header">
        <h1 className="title"> Welcome Rexie 👋 </h1>
        <img className="pet-pic" src={Rexie} alt="rexie" />
      </div>
      <PetToys toys={miloToys} />
    </div>
  );
}

export default App;
