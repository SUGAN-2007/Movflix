import './App.css'
import MovieCard from './Components/Moviecard'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Favorite from './Pages/Favourites';
import NavBar from './Components/Navbar';

function App() {
  return (
    <div>
        <NavBar/>
            <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorite />} />
      </Routes>
    </main>
    </div>
  );
}

export default App;
