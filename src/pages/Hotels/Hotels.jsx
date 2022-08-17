import React, {useEffect, useState} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Form from '../../components/Form/Form';
import Card from '../../components/Card/Card';
import FavoritesList from '../../components/FavoritesList/FavoritesList';
import HotelsList from '../../components/HotelsList/HotelsList';
import SearchHotelForm from '../../components/SearchHotelForm/SearchHotelForm';
import './Hotels.css';

const Hotels = () => {
  const [location, setLocation] = useState('Москва')
  const [date, setDate] = useState(new Date())
  const [daysCount, setDaysCount] = useState('1')
  const [favoritesList, setFavoritesList] = useState([])
  const [hotelsList, setHotelsList] = useState([])

  useEffect(() => {
    const checkInOut = date.toISOString().split('T')[0]
    fetch(`http://engine.hotellook.com/api/v2/cache.json?location=${location}&lang=ru&currency=rub&checkIn=${checkInOut}&checkOut=${checkInOut}&limit=10`)
      .then(res => res.json())
      .then(data => setHotelsList([...data]))
  }, [])

  const searchHotels = (event) => {
    event.preventDefault()
    const checkIn = date.toISOString().split('T')[0]
    const checkOut = parseInt(daysCount) > 1 ? new Date(date.setDate(date.getDate() + parseInt(daysCount))).toISOString().split('T')[0] : checkIn
    fetch(`http://engine.hotellook.com/api/v2/cache.json?location=${location}&lang=ru&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`)
      .then(res => res.json())
      .then(data => setHotelsList([...data]))
  }

  return (
    <div className='hotels'>
      <Navbar />
      <div className='hotels-grid'>
        <Card
          className={'hotels-search'}
          template={
            <Form template={
              <SearchHotelForm
                location={location}
                setLocation={setLocation}
                date={date}
                setDate={setDate}
                daysCount={daysCount}
                setDaysCount={setDaysCount}
                searchHotels={searchHotels}
              />
            }/>
          }
        />
        <Card
          className={'hotels-favourite'}
          template={
            <FavoritesList
              favoritesList={favoritesList}
              setFavoritesList={setFavoritesList}
              date={date}
              daysCount={daysCount}
            />
          }
        />
        <Card
          className={'hotels-list'}
          template={
            <HotelsList
              favoritesList={favoritesList}
              setFavoritesList={setFavoritesList}
              location={location}
              date={date}
              daysCount={daysCount}
              hotelsList={hotelsList}
            />
          }
        />
      </div>
    </div>
  );
};

export default Hotels;