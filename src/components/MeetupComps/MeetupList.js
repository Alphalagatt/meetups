
import { useContext } from "react";
import MeetUpContext from "../Contexts/MeetupContext";
import MeetupCardItem from "./MeetupCardItem"




function MeetupList(props){

    const myCtx = useContext(MeetUpContext);

    return <div>
        {props.Meetups.map(meetup=>{

            return <MeetupCardItem image={meetup.image} title={meetup.title} address={meetup.address} description = {meetup.description} btn_text={myCtx.isFav(meetup.title)?'Remove From Favorites':'Add To Favorites'} />

        })}
    </div>
}

export default MeetupList;