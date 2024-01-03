// import logo from './logo.svg';
import './App.css';
import Card from './Components/Card/Card';
import Hero from './Components/Hero/Hero';
import LoginCard from './Components/LoginCard/LoginCard';
import  Navbar  from './Components/Navbar/Navbar';
// import Hero from './Components/Hero/Hero';
import Navigation from './Components/Navigation/Navigation';
import AuthPage from './Pages/AuthPage/AuthPage';
import ClassViewPage from './Pages/ClassViewPage/ClassViewPage';
// import Features from './Components/Features/Features';
import LandingPage from './Pages/LandingPage/LandingPage';
// import Card from './Components/Card/Card';


function App() {
  return (
    <div className="App">

      {/* <LoginCard/> */}
      {/* <Navigation /> */}
      <Navbar/>

      {/* <ClassViewPage />  */}
      
      <LandingPage/>
      {/* <AuthPage/> */}
      
    </div>
  );
}

export default App;
