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

function App() {
  return (
    <div className="App">
      
      
      <BrowserRouter>
      <Navbar/>
         <Routes>
        <Route path="/" element={user ? (user.role==="STUDENT" ? <Navigate to={`/student-home/${user.userId}`} />:<Navigate to ={`/instructor-home/${user.userId}`}/> ): <LandingPage/>} />
        <Route path="/home" element={user ? (user.role==="STUDENT" ? <Navigate to={`/student-home/${user.userId}`} />:<Navigate to ={`/instructor-home/${user.userId}`}/> ): <LandingPage/>} />
        <Route path="/login" element={user ? (user.role==="STUDENT" ? <Navigate to={`/student-home/${user.userId}`} />:<Navigate to ={`/instructor-home/${user.userId}`}/> ): <StudentAuthPage />} />
        <Route path="/class-view" element={<ClassViewPage />} />
        <Route path="/explore-classes" element={<ExploreClassesPage />} />
          <Route path="/teachon-spaceed" element={<InstructorAuthPage />} />
          <Route path="/instructor-signup" element={<InstructorAuthPage />} />
          <Route path="/student-home" element={<StudentHomePage />} />
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
