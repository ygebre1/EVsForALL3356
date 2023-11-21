import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.js';
import Homepage from './pages/Homepage.js';
import Buy from './pages/Buy.js';
import Signup from './pages/Signup.js';
import Login from './pages/Login.js';
import Preferences from './pages/Preferences.js';
import ScrollToTop from './functions/ScrollToTop.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* <Route path = "" exact element = {<Layout />}> */}
            <Route index element = {<LandingPage />}/>
            <Route path = "/Homepage" element = {<Homepage />}/>
            <Route path = "/signup" element = {<Signup />}/>
            <Route path = "/login" element = {<Login />}/>
            <Route path = "/Buy" element = {<Buy />}/>
            <Route path = "/Preferences" element = {<Preferences />}/>
            {/*
            <Route path = "/profile" element = {<Profile />}/>
            <Route path = "/buy" element = {<Buy />}/> */}
          {/* </Route> */}
        </Routes>
		  </BrowserRouter>
    </div>
  );
}

export default App;
