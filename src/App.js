import { Route, Routes } from 'react-router';
import './App.css';
import MainNav from './components/navigation/MainNav';
import AllMeetups from './Pages/AllMeetups';
import Favorites from './Pages/Favorites';
import NewMeetup from './Pages/NewMeetup';

function App() {
  return (
    <div>
    <MainNav/>
    <Routes>
      <Route path='/' element={<AllMeetups/>}/>
      <Route path='/favorites' element={<Favorites/>}/>
      <Route path ='/new-meetup' element={<NewMeetup/>}/>

    </Routes>
    </div>
  );
}

export default App;
