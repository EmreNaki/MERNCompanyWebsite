import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import { Navbar } from './Components/Navbar/Navbar';
import { HomePage } from './Components/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import { PastProjects } from './Components/PastProjects/PastProjects';
import { FutureProjects } from './Components/FutureProjects/FutureProjects';
import { Contact } from './Components/Contact/Contact';
import { About } from './Components/About/About';
import { Login } from './Components/Login/Login';
import CreateProject  from './Components/CreateProject/CreateProject';
import { EditProject } from './Components/EditProject/EditProject';
import { DisplayMessages } from './Components/DisplayMessages/DisplayMessages';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  return (
    <>
    <div className="App">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/pastprojects" element={<PastProjects isLoggedIn={isLoggedIn}/>}/>
        <Route path="/futureprojects" element={<FutureProjects isLoggedIn={isLoggedIn}/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/createproject" element={<CreateProject/>} />
        <Route path="/editproject/:id" element={<EditProject/>}/>
        <Route path="/messages" element={<DisplayMessages/>}/>

      </Routes>
    </div>
    </>
  );
}

export default App;
