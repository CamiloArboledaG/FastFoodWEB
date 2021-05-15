import './App.css';
import Destacados from './components/Destacados/Destacados';
import Endbar from './components/Endbar/Endbar';
import Navbar from './components/Navbar';
import Registro from './components/Registro/Registro';
import Registro2 from './components/Registro/Registro2';
import Ingresar from './components/Ingresar/Ingresar';

function App() {
  return (
    <div className="App">
      {/*<Ingresar/>*/}
      {/*<Ingresar2/>*/}
      {/*<Registro/>*/}
      <Navbar />
      <Destacados />
      <Endbar/>
    </div>
  );
}

export default App;
