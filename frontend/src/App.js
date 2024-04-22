import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.js';
import Buy from './pages/Buy.js';
import Charging from './pages/Charging.js';
import Info from './pages/info.js';
import ScrollToTop from './functions/ScrollToTop.js';

function App() {
  // We should find a better way of giving the user a customized homepage experience rather than creating another hompage (e.g./Homepage) and calling it the logged in user page.
  // Consider conditional rendering based on whether user is logged in.
  return (
      <div>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path="/Homepage" element={<LandingPage />} />
            <Route path="/FindCars" element={<Buy />} />
            <Route path="/stations" element={<Charging />} />
            <Route path="/info" element={<Info />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
