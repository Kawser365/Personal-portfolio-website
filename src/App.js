import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';
function App() {
  return (
    <div>
    <Header/>
    <main className='main'>
    <Home/>
    <About/>
    <Skills/>
    <Services/>
    <Work/>
    <Contact/>
    <Footer/>
    </main>
    </div>
  );
}

export default App;
