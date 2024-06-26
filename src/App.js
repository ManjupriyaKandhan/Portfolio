
import './App.css';
import Navbar from './Components/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Aboutme from './Components/Aboutme';
import Projects from './Components/Projects';
import Resume from './Components/Resume';
import Contact from './Components/Contact';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    <Aboutme/>
    <Projects/>
    <Resume/>
    <Contact/>
   
    </div>
  );
}


export default App;
