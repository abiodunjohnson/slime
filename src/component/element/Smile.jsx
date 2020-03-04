import React from 'react';
import Slider from './NavBar/Slider';
// import NavigationBar from './NavBar/Nav';
import About from './AboutUs/About';
import Choose from './Choose/Choose';
import Service from './Service/Service';
import Clients from './Clients/Clients';
import Footer from  './Footer/Footer';
import NewNavBar from  './NewNavBar/NewNavBar';


function Smile() {
	return (
		<div>
		
		<NewNavBar/>
			
			<Slider />
			<About/>
			<Choose/>
			<Service/>
			<Clients/>
			<Footer />
		</div>
	);
}

export default Smile;
