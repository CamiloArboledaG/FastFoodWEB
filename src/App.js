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
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/registro">
            <Registro />
            <Endbar />
          </Route>
          <Route path="/registro-2">
            <Registro2 />
            <Endbar />
          </Route>
          <Route path="/ingresar">
            <Ingresar />
            <Endbar />
          </Route>
          <Route path="/recomendados">
            <Barusu />
            <Recomendados />
            <Endbar />
          </Route>
          <Route path="/restaurante">
            <Barusu />
            <RestaurantePerfil />
            <Endbar />
          </Route>
          <Route path="/restaurante-reserva">
            <Barusu />
            <ReservarRes />
            <Endbar />
          </Route>
          <Route path="/">
            <Navbar />
            <Destacados />
            <Endbar />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
