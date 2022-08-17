import React from 'react';
import './FavoriteListItem.css';

const FavoriteListItem = ({date, daysCount, hotel, removeFromFavorite}) => {
	return (
		<div className='list-item' >
			<div className='fav-hotel-name'>
				<span>{hotel.hotelName}</span>
				<span className='fav-image-active' onClick={() => removeFromFavorite(hotel)}/>
			</div>
			<div className='fav-hotel-date'>
        <span>
          {date.toLocaleString('ru-RU', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })} — {daysCount} день
        </span>
			</div>
			<div className='fav-hotel-mark'>
				<div className='star-block'>
					<div className={hotel.stars >= 1 ? 'star-checked' : 'star-empty'}/>
					<div className={hotel.stars >= 2 ? 'star-checked' : 'star-empty'}/>
					<div className={hotel.stars >= 3 ? 'star-checked' : 'star-empty'}/>
					<div className={hotel.stars >= 4 ? 'star-checked' : 'star-empty'}/>
					<div className={hotel.stars >= 5 ? 'star-checked' : 'star-empty'}/>
				</div>
				<div>
					<span className='fav-hotel-price-text'>Price:</span>
					<span className='fav-hotel-price-value'>{hotel.priceAvg} ₽</span>
				</div>
			</div>
		</div>
	);
};

export default FavoriteListItem;