import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Minter from './components/minter';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/minter" element = {<Minter/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
