import React from 'react';
import Slider from './NavBar/Slider';
import NavigationBar from './NavBar/Nav';
import About from './AboutUs/About';
import Choose from './Choose/Choose';
import Service from './Service/Service';
import Clients from './Clients/Clients';


function Smile() {
	return (
		<div>
			<NavigationBar/>
			<Slider />
			<About/>
			<Choose/>
			<Service/>
			<Clients/>
		
		</div>
	);
}

export default Smile;
