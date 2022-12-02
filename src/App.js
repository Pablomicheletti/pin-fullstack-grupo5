import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar';
import Home from './components/Home'
import Carusel from './components/Carusel'
import About from './components/About'






function App() {
  return (
   <div className="container-fluid">

  <Navbar /> 
  <Home />
  <Carusel />
  <About />
 


   </div>
  );
}

export default App;
