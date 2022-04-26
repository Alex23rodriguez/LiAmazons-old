import { Routes, Route } from "react-router-dom";
import Game from "./components/game.component";
import Home from "./components/home.component";
import Lobby from "./components/lobby.component";

function App() {
  return (
    <Routes>
      <Route path='/games/:id' element={<Game />} />
      <Route path='/' element={<Home />} />
      <Route path='/lobby' element={<Lobby />} />
      <Route path='/*' element={<div>page not found</div>} />
    </Routes>
  );
}

export default App;
