import './App.css';
import Destacados from './components/Destacados/Destacados';
import Endbar from './components/Endbar/Endbar';
import Navbar from './components/Navbar/Navbar';
import Registro from './components/Registro/Registro';
import Registro2 from './components/Registro/Registro2';
import Ingresar from './components/Ingresar/Ingresar';
import Barusu from './components/Navbar/Barusu';
import Recomendados from './components/Recomendados/Recomendados';
import RestaurantePerfil from './components/Restaurante/RestaurantePerfil';
import ReservarRes from './components/Restaurante/Reserva/ReservarRes';

function App() {
  return (
    <div className="App">
      {/*<Ingresar/>*/}
      {/*<Ingresar2/>*/}
      {/*<Registro/>*/}
      {/*<Navbar />*/}
      <Barusu/>
      {/* <Destacados /> */}
      {/* <Recomendados/>  */}
      {/* <RestaurantePerfil/> */}
      <ReservarRes/>
      <Endbar/>
    </div>
  );
}

export default App;
