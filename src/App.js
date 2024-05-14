import './App.css';
import React from 'react';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from "./screens/SignupScreen";
import ShopScreen from './screens/ShopScreen';
import ProductScreen from './screens/ProductScreen';
import FormAchatScreen from './screens/FormAchatScreen';
import Navbar from './components/Navbar';
import PaiementScreen from './screens/PaiementScreen';
import ConsultClaimScreen from './screens/ConsultClaimScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div className="App">
     <HomeScreen />
    </div>
  );
}

export default App;
