import { useContext } from "react";
import MeetUpContext from "../components/Contexts/MeetupContext";
import MeetupList from "../components/MeetupComps/MeetupList";

function Favorites(){
    const myCtx = useContext(MeetUpContext);
    const myFavs = myCtx.Favorites;
    if(myFavs ===[]){
        return<div>
            No favorites yet please add some..
        </div>
    }
    return <div>
        <h1>Favorites</h1>
        <MeetupList Meetups={myFavs}/>    
    </div>
}

export default Favorites;