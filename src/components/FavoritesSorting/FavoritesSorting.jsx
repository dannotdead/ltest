import React from 'react';
import ArrowUpActiveImage from '../../assets/arrow-up-active.svg';
import ArrowUpImage from '../../assets/arrow-up.svg';
import ArrowDownActiveImage from '../../assets/arrow-down-active.svg';
import ArrowDownImage from '../../assets/arrow-down.svg';
import './FavoritesSorting.css';

const FavoritesSorting = ({sortBy, setSortBy}) => {
	return (
		<div className='sorting-block'>
			<div
				className={sortBy.method === 'rating' ? 'sort-by-active' : 'sort-by'}
				onClick={() => setSortBy({method: 'rating', value: !sortBy.value})}
			>
				<span>Рейтинг</span>
				<div style={{display: 'flex', flexDirection: 'column', marginLeft: '10px'}}>
					<img src={sortBy.method === 'rating' && sortBy.value ? ArrowUpActiveImage : ArrowUpImage} alt='' />
					<img src={sortBy.method === 'rating' && !sortBy.value ? ArrowDownActiveImage : ArrowDownImage} alt=''/>
				</div>
			</div>
			<div
				className={sortBy.method === 'price' ? 'sort-by-active' : 'sort-by'}
				onClick={() => setSortBy({method: 'price', value: !sortBy.value})}
			>
				<span>Цена</span>
				<div style={{display: 'flex', flexDirection: 'column', marginLeft: '10px'}}>
					<img src={sortBy.method === 'price' && sortBy.value  ? ArrowUpActiveImage : ArrowUpImage} alt='' />
					<img src={sortBy.method === 'price' && !sortBy.value ? ArrowDownActiveImage : ArrowDownImage} alt=''/>
				</div>
			</div>
		</div>
	);
};

export default FavoritesSorting;