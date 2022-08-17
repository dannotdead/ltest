import React from 'react';
import HouseImage from '../../assets/house.svg';
import './HotelsListItem.css';

const HotelsListItem = ({hotel, date, daysCount, addToFavorite}) => {
	return (
		<div className='hotel-list-item'>
			<div className='hotel-list-item-image'>
				<img src={HouseImage} alt=""/>
			</div>
			<div className='hotel-list-item-block'>
				<span className='hotel-list-item-name'>{hotel.hotelName}</span>
				<span className='hotel-list-item-date'>
          {date.toLocaleString('ru-RU', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })} — {daysCount} день
        </span>
				<div className='star-block'>
					<div className={hotel.stars >= 1 ? 'star-checked' : 'star-empty'}/>
					<div className={hotel.stars >= 2 ? 'star-checked' : 'star-empty'}/>
					<div className={hotel.stars >= 3 ? 'star-checked' : 'star-empty'}/>
					<div className={hotel.stars >= 4 ? 'star-checked' : 'star-empty'}/>
					<div className={hotel.stars >= 5 ? 'star-checked' : 'star-empty'}/>
				</div>
			</div>
			<div className='hotel-list-item-fav'>
				<span className='fav-image' onClick={() => addToFavorite(hotel)}/>
				<div>
					<span className='hotel-list-item-price-text'>Price:</span>
					<span className='hotel-list-item-price-val'>{hotel.priceAvg} ₽</span>
				</div>
			</div>
		</div>
	);
};

export default HotelsListItem;