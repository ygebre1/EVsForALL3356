import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage.js';
import ScrollToTop from './functions/ScrollToTop.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* <Route path = "" exact element = {<Layout />}> */}
            <Route index element = {<Homepage />}/>
            {/* <Route path = "login" element = {<Login />}/>
            <Route path = "signup" element = {<SignUp />}/>
            <Route path = "profile" element = {<Profile />}/>
            <Route path = "buy" element = {<Buy />}/> */}
          {/* </Route> */}
        </Routes>
		  </BrowserRouter>
    </div>
  );
}

export default App;
