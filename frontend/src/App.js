import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './functions/userContext';
import LandingPage from './pages/LandingPage.js';
import Homepage from './pages/Homepage.js';
import Buy from './pages/Buy.js';
import Signup from './pages/Signup.js';
import Login from './pages/Login.js';
import Preferences from './pages/Preferences.js';
import ScrollToTop from './functions/ScrollToTop.js';

function App() {
  return (
    <UserProvider> {/* Wrap your components with UserProvider */}
      <div>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path="/Homepage" element={<Homepage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Buy" element={<Buy />} />
            <Route path="/Preferences" element={<Preferences />} />
            {/* Other routes */}
          </Routes>
        </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;
