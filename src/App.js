import About from './components/About';
import Footer from './components/Footer';
import Navbars from './components/Navbars';
import Projects from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import Service from './components/Service';
import Testimonials from './components/Testimonials';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbars/>
     <About/>
     <Service/>
    <Projects/>
    <Testimonials/>
    <Footer/>
    </div>
  );
}

export default App;
