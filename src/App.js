import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from "./components/Header";
import Introduction from './components/Introduction';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <Skills />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
