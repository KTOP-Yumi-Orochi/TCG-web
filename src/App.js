import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailsPage from 'pages/home/DetailsPage';
import LoginPage from 'pages/auth/LoginPage';
import News from 'pages/news/News';
import Coin from 'pages/coin/Coin';
import Buy from 'pages/coin/buy/Buy';
import Swap from 'pages/coin/swap/Swap';
import Stake from 'pages/coin/stake/Stake';
import MysteryBox from 'pages/mystery-box/MysteryBox';
import AboutUs from 'pages/about-us/AboutUs';
import Whitepaper from 'pages/whitepaper/Whitepaper';
import Roadmap from 'pages/whitepaper/roadmap/Roadmap';
import DragonBibble from 'pages/whitepaper/dragon-bibble/DragonBibble';
import DragonBibbleBook from 'pages/whitepaper/dragon-bibble/book/DragonBibbleBook';
import World from 'pages/world/World';
import Marketplace from "pages/marketplace/Marketplace";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<DetailsPage />}></Route>
        <Route path='*' element={<LoginPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/news' element={<News />}></Route>
        <Route path='/coin' element={<Coin />}></Route>
        <Route path='/coin/buy' element={<Buy />}></Route>
        <Route path='/coin/swap' element={<Swap />}></Route>
        <Route path='/coin/stake' element={<Stake />}></Route>
        <Route path='/mystery-box' element={<MysteryBox />}></Route>
        <Route path='/about-us' element={<AboutUs />}></Route>
        <Route path='/whitepaper' element={<Whitepaper />}></Route>
        <Route path='/whitepaper/roadmap' element={<Roadmap />}></Route>
        <Route path='/whitepaper/dragon-bibble' element={<DragonBibble />}></Route>
        <Route path='/whitepaper/dragon-bibble/:id' element={<DragonBibbleBook />}></Route>
        <Route path='/world' element={<World />}></Route>
        <Route path='/marketplace' element={<Marketplace />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
