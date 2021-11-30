import { Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import MeetUpContext from "../Contexts/MeetupContext";
import './MainNav.css';
function MainNav(){

    const myCtx = useContext(MeetUpContext);


    return <header>
        <h2>Meetups</h2>
        <nav>
            <ul>
                <li><Link to='/'>All Meetups</Link></li>
                <li><Link to='/favorites'>Favorites</Link></li><span className='badge'>{myCtx.numOfMeetups}</span>
                <li><Link to='/new-meetup'>New Meetup</Link></li>
            </ul>
        </nav>
        <Link to='/'><button>Get Started</button></Link>
    </header>
}

export default MainNav;