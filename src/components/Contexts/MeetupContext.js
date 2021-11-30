import { createContext, useState } from "react";

const MeetUpContext = createContext({
    Favorites:[],
    numOfMeetups:0,
    add:(myMeetup)=>{},
    remove:(meetupId)=>{},
    isFav:(meetupId)=>{},
});

export function MeetupContextProvider(props){

    const [favs,setFavs] = useState([]);

    function addTofavs(myMeetup){
        setFavs(prevFavs=>{
            return prevFavs.concat(myMeetup);
        });
        

    }
    function removeFromFavs(meetupId){
        setFavs(prevFavs=>{
            return prevFavs.filter(meetup=>meetup.title !== meetupId);
        });
        
    }
    function itemIsFav(meetupId){
           return favs.some(meetup=>meetup.title === meetupId);
    }
    

    const Context = {
        Favorites:favs,
        numOfMeetups:favs.length,
        add:addTofavs,
        remove:removeFromFavs,
        isFav:itemIsFav,
    }

   return <MeetUpContext.Provider value={Context}>
        {props.children}
    </MeetUpContext.Provider>
}

export default MeetUpContext;