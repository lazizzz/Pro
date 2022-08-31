import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./Pages/About";
import AddHero from "./Pages/Add Hero";
import Cart from "./Pages/Cart";
import ContactPage from "./Pages/Contact";
import ExplorePage from "./Pages/Explore";
import HomePage from "./Pages/Home";
import LoginPage from "./Pages/Login";
import MorePage from "./Pages/More";
import Example from "./Pages/Nav";
import AuthProvider from "./utilities/authContext";
import GameProvider from "./utilities/gameContext";

function App() {
  return (
    <AuthProvider>
     <GameProvider>    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
         
        <Route path="/About" element={<AboutPage />}></Route>
        <Route path="/Explore" element={<ExplorePage />}></Route>
        <Route path="/Hero" element={<AddHero />}></Route>
        <Route path="/Contact" element={<ContactPage />}></Route>
        <Route path="/Login" element={<LoginPage />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/About/:gameId" element={<AboutPage />}></Route>
        <Route path="/example" element={<Example />}></Route>

      </Routes>
    </BrowserRouter>
    </GameProvider>  
    </AuthProvider>
  );
}

export default App;
