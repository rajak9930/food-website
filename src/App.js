import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Contact from './Food/Components/Contact';
import Footer from './Food/Components/Footer';
import Header from './Food/Components/Header';
import Menu from './Food/Components/Menu';
import Navbar from './Food/Components/Navbar';
import OurStory from './Food/Components/OurStory';
import Today from './Food/Components/Today';







function App() {
  
  return (
    <div className="App">
    
    <Navbar/>
    <Header/>
    <Today/>
    <Menu/>
    <OurStory/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
