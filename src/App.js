import {Routes, Route, Navigate} from 'react-router-dom';

import Auth from './pages/Auth/Auth';
import Hotels from './pages/Hotels/Hotels';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/login' element={<Auth />}/>
        <Route path='/hotels' element={<Hotels />}/>
        <Route path='*' element={<Auth />}/>
      </Routes>
    </>
  );
}

export default App;
