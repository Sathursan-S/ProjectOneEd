// import logo from './logo.svg';
import './App.css';
import Card from './Components/Card/Card';

import Hero from './Components/Hero/Hero';
import LoginCard from './Components/LoginCard/LoginCard';
import  Navbar  from './Components/Navbar/Navbar';
// import Hero from './Components/Hero/Hero';
import Navigation from './Components/Navigation/Navigation';
import StudentAuthPage from './Pages/StudentAuthPage/StudentAuthPage';
import ClassViewPage from './Pages/ClassViewPage/ClassViewPage';
// import Features from './Components/Features/Features';
import LandingPage from './Pages/LandingPage/LandingPage';
import InstructorAuthPage from './Pages/InstructorAuthPage/InstructorAuthPage';
// import Card from './Components/Card/Card';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ExploreClassesPage from './Pages/ExploreClassesPage/ExploreClassesPage';
import StudentHomePage from './Pages/StudentHomePage/StudentHomePage';
import AuthPage from './Pages/StudentAuthPage/StudentAuthPage';

function App() {
  return (
    <div className="App">
      
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<StudentAuthPage />} />
          <Route path="/class-view" element={<ClassViewPage />} />
          <Route path="/explore-classes" element={<ExploreClassesPage />} />
          <Route path="/instructor-signup" element={<InstructorAuthPage />} />
          <Route path="/student-home" element={<StudentHomePage />} />
        </Routes>
      </BrowserRouter>
      {/* <StudentHomePage/> */}
      {/* <InstructorAuthPage/> */}

      {/* <ExploreClassesPage/> */}
      {/* <LoginCard/> */}
      {/* <Navigation /> */}
      {/* <Navbar/> */}

      {/* <ClassViewPage />  */}
      
      {/* <LandingPage/> */}
      {/* <AuthPage/> */}
      
    </div>
  );
}

export default App;
