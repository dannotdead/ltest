import React, {useEffect, useState} from 'react';
import FavoritesSorting from '../FavoritesSorting/FavoritesSorting';
import FavoriteListItem from '../FavoriteListItem/FavoriteListItem';
import './FavoritesList.css';

const FavoritesList = ({favoritesList, setFavoritesList, date, daysCount}) => {
	const [sortBy, setSortBy] = useState({
		method: '',
		value: false
	})

	useEffect(() => {
		if (sortBy.method === 'rating' && sortBy.value) {
			setFavoritesList(favoritesList.sort((rateUp, rateDown) => rateUp.stars - rateDown.stars))
		}

		if (sortBy.method === 'rating' && !sortBy.value) {
			setFavoritesList(favoritesList.sort((rateUp, rateDown) => rateDown.stars - rateUp.stars))
		}

		if (sortBy.method === 'price' && sortBy.value) {
			setFavoritesList(favoritesList.sort((rateUp, rateDown) => rateUp.priceAvg - rateDown.priceAvg))
		}

		if (sortBy.method === 'price' && !sortBy.value) {
			setFavoritesList(favoritesList.sort((rateUp, rateDown) => rateDown.priceAvg - rateUp.priceAvg))
		}
	}, [sortBy])

	const removeFromFavorite = (hotel) => {
		setFavoritesList([
			...favoritesList.filter(favHotel => favHotel.hotelId !== hotel.hotelId)
		])
	}

	return (
		<div className='fav-block'>
			<span className='fav-block-header'>Избранное</span>
			<FavoritesSorting
				sortBy={sortBy}
				setSortBy={setSortBy}
			/>
			<div className='list'>
				{favoritesList && favoritesList.map(hotel => (
					<FavoriteListItem
						key={hotel.hotelId}
						date={date}
						daysCount={daysCount}
						hotel={hotel}
						removeFromFavorite={removeFromFavorite}
					/>
				))}
			</div>
		</div>
	);
};

export default FavoritesList;