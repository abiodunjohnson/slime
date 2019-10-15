import React from 'react';
import images from '../images/image';
import { Gallery, GalleryImage } from 'react-gesture-gallery';



const initialIndex = 0;
function HeroImage() {
	const [ index, setIndex ] = React.useState(initialIndex);
React.useEffect(()=>{
  const interval = setInterval(()=>{
    if(index === images.length - 1){
  setIndex(initialIndex)
    }else{
        setIndex(index + 1) 
    }
  },2500)
  return ()=>clearInterval(interval)
}, [index])
	console.log(images[1]);
	return (
		<div>
			<Gallery
				
				index={index}
				onRequestChange={(i) => {
					setIndex(i);
				}}
			>
				{images.map((image) => <GalleryImage style={{
					width : '100%',
					height: '650px',
					marginTop: '0rem'
					// marginBottom: '2rem'
				}} objectFit="cover" src={image} />)}
			</Gallery>
			<h1>hello</h1>
		</div>
	);
}
export default HeroImage;
