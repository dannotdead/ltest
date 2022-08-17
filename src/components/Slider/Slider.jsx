import React, {useRef, useState} from 'react';
import SlideImage1 from '../../assets/slide1.png';
import SlideImage2 from '../../assets/slide2.png';
import SlideImage3 from '../../assets/slide3.png';
import './Slider.css';

const Slider = () => {
	const [sliderImages, setSliderImages] = useState([
		SlideImage1, SlideImage2, SlideImage3,
		SlideImage1, SlideImage2, SlideImage3,
		SlideImage1, SlideImage2, SlideImage3,
	])
	const [isDown, setIsDown] = useState(false)
	const slider = useRef()
	const [startX, setStartX] = useState()
	const [scrollLeft, setScrollLeft] = useState()

	const end = () => {
		setIsDown(false)
	}

	const start = (event) => {
		setIsDown(true)
		setStartX(event.pageX || event.touches[0].pageX - slider.current.offsetLeft);
		setScrollLeft(slider.current.scrollLeft);
	}

	const move = (event) => {
		if(!isDown) return;
		event.preventDefault();
		const x = event.pageX || event.touches[0].pageX - slider.current.offsetLeft;
		const dist = (x - startX);
		slider.current.scrollLeft = scrollLeft - dist;
	}

	return (
		<div
			className='slider'
			ref={slider}

			onMouseDown={(event) => start(event)}
			onTouchStart={(event) => start(event)}

			onMouseMove={(event) => move(event)}
			onTouchMove={(event) => move(event)}

			onMouseLeave={(event) => end(event)}
			onMouseUp={(event) => end(event)}
			onTouchEnd={(event) => end(event)}
		>
			{sliderImages && sliderImages.map((sliderImage, index) => (
				<img src={sliderImage} alt='' key={index} className='slider-item'/>
			))}
		</div>
	);
};

export default Slider;