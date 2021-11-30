import { useContext } from "react";
import MeetUpContext from "../Contexts/MeetupContext";
import './MeetupCardItem.css';


function MeetupCardItem(props){

    const myCtx = useContext(MeetUpContext);
    

 function addTofavs(){
    myCtx.add({
        title:props.title,
        address:props.address,
        image:props.image,
        description:props.description,
    });
}

function removeFromFavs(){
    myCtx.remove(props.title);
}

const itemIsFav = myCtx.isFav(props.title);


    return<div className='main'>
        <div className='card'>
        <img src={props.image} alt={props.title}/>
        <div className='content'>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <h5>{props.address}</h5>
        <button onClick={itemIsFav?removeFromFavs:addTofavs}>{props.btn_text}</button>
        </div>
        </div>
    </div>
}

export default MeetupCardItem;