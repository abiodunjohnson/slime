import React from 'react';
import './App.css';
import AboutUs from './component/element/AboutUs/AboutUs';
import Choose from './component/element/Choose/Choose';
import Service from './component/element/Service/Service';
import Clients from './component/element/Clients/Clients';
function App() {
  return (
    <div className="App">
     <AboutUs />
     <Choose />
     <Service />
     <Clients />
    </div>
  );
}

export default App;
