import { Routes, Route } from "react-router-dom";
import Game from "./components/game.component";

function App() {
  return (
    <Routes>
      <Route path='/games/:id' element={<Game />} />
      <Route path='/*' element={<div>page not found</div>} />
    </Routes>
  );
}

export default App;
