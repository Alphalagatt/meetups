import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import MeetupList from "../components/MeetupComps/MeetupList";
import './AllMeetups.css';

// const DUMMY_MEETUPS = [
//     {
//         title:'My first meetup',
//         address:'Naivasha kenya, hippos village resort',
//         image:'https://media.cntraveler.com/photos/57c0695b523900e805f2e31e/master/w_2048,h_1536,c_limit/table-mountain-cape-town-GettyImages-185108998.jpg',
//         description:'What a beautiful African landscape.. We can never forget this place...',

//     },
//     {
//         title:'My second meetup',
//         address:'Naivasha kenya, hippos village resort',
//         image:'https://media.cntraveler.com/photos/57c0695b523900e805f2e31e/master/w_2048,h_1536,c_limit/table-mountain-cape-town-GettyImages-185108998.jpg',
//         description:'What a beautiful African landscape.. We can never forget this place...',

//     },
//     {
//         title:'My third meetup',
//         address:'Naivasha kenya, hippos village resort',
//         image:'https://media.cntraveler.com/photos/57c0695b523900e805f2e31e/master/w_2048,h_1536,c_limit/table-mountain-cape-town-GettyImages-185108998.jpg',
//         description:'What a beautiful African landscape.. We can never forget this place...',

//     },
// ]

function AllMeetups(){
    const [isLoading,setIsLoading] = useState(true);
    const [meetups, setMeetups] = useState([]);

    useEffect(()=>{
        fetch('https://mymeetup-646f0-default-rtdb.firebaseio.com/meetups.json').then((response)=>{
            response.json().then((data)=>{
                const myMeetups =[];
                for (const key in data) {
                    const meetup = {
                        id:key,
                        ...data[key],
                    }
                    myMeetups.push(meetup);
                }
                setMeetups(myMeetups);
                setIsLoading(false);
            })
        })
    },[]);
    
    if(isLoading){
        return <div className='main'> <div className='loader'>
            
        </div></div>
    }
    else{
    return <div>
        <MeetupList Meetups={meetups}/>
    </div>
    }
}

export default AllMeetups;