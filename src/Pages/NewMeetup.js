import { useRef } from "react";
import './NewMeetup.css';


function NewMeetup(){
    const titleInput = useRef();
    const imageInput = useRef();
    const descriptionInput = useRef();
    const addressInput = useRef();
    
    function formSubmitHandler(){
        const Meetup = {
            title:titleInput.current.value,
            image:imageInput.current.value,
            description:descriptionInput.current.value,
            address:addressInput.current.value,
        }
        fetch('https://mymeetup-646f0-default-rtdb.firebaseio.com/meetups.json',{
            method:'POST',
            body: JSON.stringify(Meetup),
            headers:{
                'Content-Type':'application/json',
            },
        }).then(()=>{
            titleInput.current.value='';
            imageInput.current.value='';
            descriptionInput.current.value='';
            addressInput.current.value='';
        });

    }
    return<div>
        we create new meetup here..
        <div className='main-form'>
        <div><input id='title' type='text' ref={titleInput} placeholder='Title'/></div>
        <div><input id='image' type='text' ref={imageInput} placeholder='Image Url'/></div>
        <div><input id='description' type='text' ref={descriptionInput} placeholder='Description'/></div>
        <div><input id='address' type='text' ref={addressInput} placeholder='Address'/></div>
        <div><button onClick={formSubmitHandler}>Submit</button></div>

        </div>

    </div>
}

export default NewMeetup;