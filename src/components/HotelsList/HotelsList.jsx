import React from 'react';
import ArrowImage from '../../assets/arrow.svg';
import Slider from '../Slider/Slider';
import HotelsListItem from '../HotelsListItem/HotelsListItem';
import './HotelsList.css';

const HotelsList = ({
	favoritesList,
	setFavoritesList,
	location,
	date,
	daysCount,
	hotelsList
}) => {

	const addToFavorite = (hotel) => {
		if (!favoritesList.includes(hotel)) {
			setFavoritesList([...favoritesList, hotel])
		}
	}

	return (
		<>
			<div className='hotels-location'>
				<div>
					<span>Отели</span>
					<img src={ArrowImage} alt='' />
					<span>{location}</span>
				</div>
				<div className='hotels-location-date'>
					{date.toLocaleString('ru-RU', {
						day: 'numeric',
						month: 'short',
						year: 'numeric',
					})}
				</div>
			</div>

			<Slider />

			<div className='hotels-fav'>
				Добавлено в Избранное: <span>{favoritesList.length}</span> отеля
			</div>

			<div className='hotels-list-block'>
				{hotelsList && hotelsList.map(hotel => (
					<HotelsListItem
						key={hotel.hotelId}
						hotel={hotel}
						date={date}
						daysCount={daysCount}
						addToFavorite={addToFavorite}
					/>
				))}
			</div>
		</>
	);
};

export default HotelsList;