import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero/Hero';
import Navigation from './Components/Navigation/Navigation';
import Features from './Components/Features/Features';
import LandingPage from './Pages/LandingPage/LandingPage';
import Card from './Components/Card/Card';
import LoginPage from '../src/Pages/LoginPage/LoginPage';

function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      
      {/* <LandingPage/> */}
      <LoginPage/>
      
    </div>
  );
}

export default App;
