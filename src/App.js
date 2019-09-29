

  import React from 'react';
import './App.css';
  import Navbar from './component/element/NavBar/Nav';
import './NavBar.css'
import HeroImage from './component/element/HeroImage/HeroImage';
import AboutUs from './component/element/AboutUs/AboutUs';
import Choose from './component/element/Choose/Choose';
import Service from './component/element/Service/Service';
function App() {
  return (
    <div className="App">
    <Navbar />
		<HeroImage />
     <AboutUs />
     <Choose />
     <Service />
    </div>
  );

}

export default App;
