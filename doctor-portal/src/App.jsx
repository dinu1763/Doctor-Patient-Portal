import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Patients from './components/Patients/Patients';
import { Doctors } from './components/Doctors/Doctors';
import { PrivateRoute } from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/patient"
          element={
            <PrivateRoute>
              <Patients />
            </PrivateRoute>
          }></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route
          path="/doctor"
          element={
            <PrivateRoute>
              <Doctors />
            </PrivateRoute>
          }
        ></Route>
        <Route path="*" element={<h1>404 Page Not Found!</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
