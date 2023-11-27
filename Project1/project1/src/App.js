import './App.css';
import React from 'react';
import LoginPage from './component/LoginPage';
import Register from './component/Register';
import Homepage from './component/Homepage';
import Fruits from './component/Fruits';
import Nuts from './component/Nuts';
import Meats from './component/Meats';
import Oils from './component/Oils';
import Beauty from './component/Beauty';
import Baby from './component/Baby';
import Biverage from './component/Biverage';
import Fsnacks from './component/Fsnacks';
import Kitchen from './component/Kitchen';
import Pets from './component/Pets';
import Snacks from './component/Snacks';
import Aboutus from './component/Aboutus';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Set the default route to the Login page */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<Register />} />
          <Route path="/m" element={<Homepage />} />
          <Route path="/f" element={<Fruits />} />
          <Route path="/nu" element={<Nuts />} />
          <Route path="/mo" element={<Meats />} />
          <Route path="/oi" element={<Oils />} />
          <Route path="/be" element={<Beauty />} />
          <Route path="/kp" element={<Kitchen />} />
          <Route path="/bp" element={<Baby />} />
          <Route path="/sn" element={<Snacks />} />
          <Route path="/fs" element={<Fsnacks />} />
          <Route path="/bi" element={<Biverage />} />
          <Route path="/pb" element={<Pets />} />
          <Route path="/ab" element={<Aboutus />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App