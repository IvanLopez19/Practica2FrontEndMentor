import './App.css';
import About from './components/about';
import Suscripcion from './components/suscripcion';
import Encabezado from './components/encabezado';
import './estilo/style.css'
function App() {
  return (
    <div className="total">
      <Encabezado/>
      <Suscripcion/>
      <About/>
    </div>
  );
}

export default App;
