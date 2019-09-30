
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Smile from './component/element/Smile';
import AboutUs from './component/element/AboutUs/AboutUs.jsx';
import Photo from './component/element/AboutUs/Photo';
import Snails from './component/element/AboutUs/Snails';
import Training from './component/element/AboutUs/Training';
// import Nav from './component/element/NavBar/Nav';
 // eslint-disable-next-line
import Example from './component/element/NavBar/Example.jsx';
 // eslint-disable-next-line
import Example2 from './component/element/NavBar/Nav2';
// import HeroImage from './component/element/HeroImage/HeroImage';

const Error =()=>{
    return (
      <div>
         <h1>Error: The path doesn't exist</h1>
         
         
      </div>
    )
  }
function App() {
	return (
		

		
<BrowserRouter>
<div className="App">
<Switch>
<Route path="/" component={Smile} exact />
<Route path="/aboutus" component={AboutUs} />
<Route path="/photo" component={Photo} />
<Route path="/snails" component={Snails} />
<Route path="/training" component={Training} />
<Route component={Error} />

</Switch>

</div>


</BrowserRouter>

	);
}


