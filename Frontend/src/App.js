import './App.css';
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Pages/LandingPage/LandingPage';
import StudentAuthPage from './Pages/StudentAuthPage/StudentAuthPage';
import ClassViewPage from './Pages/ClassViewPage/ClassViewPage';
import ExploreClassesPage from './Pages/ExploreClassesPage/ExploreClassesPage';
import InstructorAuthPage from './Pages/InstructorAuthPage/InstructorAuthPage';
import StudentHomePage from './Pages/StudentHomePage/StudentHomePage';

function App() {
  const user = useSelector((state) => state.authReducer.authData);

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={!user ? <LandingPage/> : user.role==="STUDENT" ? <Navigate to={`/student-home/${user.userId}`} /> : <Navigate to={`/instructor-home/${user.userId}`}/>} />
        <Route path="/login" element={!user ? <StudentAuthPage /> : user.role==="STUDENT" ? <Navigate to={`/student-home/${user.userId}`} /> : <Navigate to={`/instructor-home/${user.userId}`}/> } />
        <Route path="/class-view" element={<ClassViewPage />} />
        <Route path="/explore-classes" element={<ExploreClassesPage />} />
        <Route path="/teachon-spaceed" element={<InstructorAuthPage />} />
        <Route path="/instructor-signup" element={<InstructorAuthPage />} />
        <Route path="/student-home/:id" element={user ? <StudentHomePage /> : <Navigate to="/home" />} />
        <Route path="/instructor-home/:id" element={user ? (user.role === "INSTRUCTOR" ? <Navigate to={`/instructor-home/${user.userId}`} /> : <Navigate to={`/student-home/${user.userId}`} />) : <Navigate to="/home" />} />
      </Routes>
    </div>
  );
}

export default App;
