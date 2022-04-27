import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Game from "./components/game.component";
import { Header } from "./components/header.component";
import Home from "./components/home.component";
import Lobby from "./components/lobby.component";
import { Login } from "./components/login.component";

function App() {
  const [user, setUser] = useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null);
  }

  return (
    <>
      <Header user={user} logoutFn={logout} />
      <Routes>
        <Route path='/games/:id' element={<Game />} />
        <Route path='/' element={<Home />} />
        <Route path='/lobby' element={<Lobby />} />
        <Route path='/login' element={<Login loginFn={login} />} />
        <Route path='/*' element={<div>page not found</div>} />
      </Routes>
    </>
  );
}

export default App;
