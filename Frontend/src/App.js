// import logo from './logo.svg';
import './App.css';
import Card from './Components/Card/Card';

import Hero from './Components/Hero/Hero';
import LoginCard from './Components/LoginCard/LoginCard';
import  Navbar  from './Components/Navbar/Navbar';
=======

// import Hero from './Components/Hero/Hero';
import Navigation from './Components/Navigation/Navigation';
import StudentAuthPage from './Pages/StudentAuthPage/StudentAuthPage';
import ClassViewPage from './Pages/ClassViewPage/ClassViewPage';
// import Features from './Components/Features/Features';
import LandingPage from './Pages/LandingPage/LandingPage';
import InstructorAuthPage from './Pages/InstructorAuthPage/InstructorAuthPage';
// import Card from './Components/Card/Card';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<StudentAuthPage />} />
          <Route path="/class-view" element={<ClassViewPage />} />
        </Routes>
      </BrowserRouter>


      {/* <LoginCard/> */}
      {/* <Navigation /> */}
      <Navbar/>

      {/* <ClassViewPage />  */}
      

      <LandingPage/>
      {/* <AuthPage/> */}
      
=======
      {/* <LandingPage/> */}
      {/* <StudentAuthPage/> */}
      {/* <InstructorAuthPage/> */}

    </div>
  );
}

export default App;
