import './App.css';
import Home from './pages/Home';
import {BrowserRouter, Route,Routes} from "react-router-dom"
import Bio from './pages/Bio';
import Contact from './pages/Contact';
import ScrollToTop from './components/scrolltotop';

function App() {
  return (
  <BrowserRouter>
  <ScrollToTop/>
 <Routes>
 <Route path="/" element={<Home />}></Route>
 <Route path= "/bio" element={<Bio />}></Route>
 <Route path="/contact" element={<Contact />}></Route>
</Routes>
 </BrowserRouter>
  );
}

export default App;
