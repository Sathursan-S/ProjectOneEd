// import logo from './logo.svg';
import './App.css';
import { useSelector } from "react-redux";

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
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import ExploreClassesPage from './Pages/ExploreClassesPage/ExploreClassesPage';
import StudentHomePage from './Pages/StudentHomePage/StudentHomePage';
import AuthPage from './Pages/StudentAuthPage/StudentAuthPage';
import InstructorHomePage from './Pages/InstructorHomePage/InstructorHomePage';
import {jwtDecode} from 'jwt-decode';

function App() {
  const user = useSelector((state) => state.authReducer.authData);
    

    // if (data && data.access_token) {
    //     try {
    //         user = jwtDecode(data.access_token);
    //     } catch (error) {
    //         console.error("Failed to decode JWT:", error);
    //         user = 0; // or any other default/fallback value
    //     }
    // } else {
    //     user = 0; // Handle cases where there is no token or data
    // }

    // console.log(user);
  return (
    <div className="App">
      
      
      
      <Navbar/>
        <Routes>
        <Route path="/" element={user ? (user.role==="STUDENT" ? <Navigate to={`/student-home/${user.userId}`} />:<Navigate to ={`/instructor-home/${user.userId}`}/> ): <LandingPage/>} />
        <Route path="/home" element={user ? (user.role==="STUDENT" ? <Navigate to={`/student-home/${user.userId}`} />:<Navigate to ={`/instructor-home/${user.userId}`}/> ): <LandingPage/>} />
        <Route path="/login" element={user ? (user.role==="STUDENT" ? <Navigate to={`/student-home/${user.userId}`} />:<Navigate to ={`/instructor-home/${user.userId}`}/> ): <StudentAuthPage />} />
        <Route path="/class-view" element={<ClassViewPage />} />
        <Route path="/explore-classes" element={<ExploreClassesPage />} />
        <Route path="/instructor-signup" element={<InstructorAuthPage />} />
        <Route path="/student-home/:id" element={user ? <StudentHomePage /> : <Navigate to="/home" />} />
        <Route path="/instructor-home/:id" element={user ? (user.role==="STUDENT" ? <Navigate to={`/student-home/${user.userId}`} />:<Navigate to ={`/instructor-home/${user.userId}`}/> ) : <Navigate to="/home" />} />
      </Routes>

      
      {/* <StudentHomePage/> */}
      {/* <InstructorHomePage/> */}
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
