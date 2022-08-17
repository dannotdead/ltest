import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

const SearchHotelForm = ({
	location, setLocation,
	date, setDate,
	daysCount, setDaysCount,
	searchHotels
}) => {
	return (
		<>
			<Input
				label={'Локация'}
				labelClassName='hotels-search-label'
				value={location}
				onChange={(event) => setLocation(event.target.value)}
			/>
			<Input
				label={'Дата заселения'}
				labelClassName='hotels-search-label'
				type={'date'}
				value={date.toISOString().split('T')[0]}
				onChange={(event) => setDate(new Date(event.target.value))}
			/>
			<Input
				label={'Количество дней'}
				labelClassName='hotels-search-label'
				value={daysCount}
				onChange={(event) => setDaysCount(event.target.value)}
			/>
			<Button name={'Найти'} onClick={(event) => searchHotels(event)}/>
		</>
	);
};

export default SearchHotelForm;