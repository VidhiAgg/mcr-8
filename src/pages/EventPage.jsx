import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";


import "./eventpage.css"

const EventPage = () => {
    const {state, dispatch,id} = useParams();
    const {meetupData} = useContext(AppContext);
    const [isPaid, setIsPais] = useState(getEvent?.isPaid);
    const [rsvp, setRsvp] = useState();
    const [showModal, setShowModal] = useState(false);
    const getEvent = meetupData?.find((data)=> data.id === id)
const handleButtonClick =(e) =>{
    

    <Dialog open={showModal} onClose={setShowModal}>

  
  <DialogTitle>Complete your RSVP</DialogTitle>
  <DialogContent>
    <label htmlFor="name"> Name:
        <input required type="text" name="" id="name" />
    </label>
    <label htmlFor="email"> Email:
        <input required type="email" name="" id="email" />
    </label>
    <p>You have to make the payment at the venue</p>
  </DialogContent>
  <DialogActions>
          <Button onClick={(e)=> setIsPais(true)}>Submit</Button>
        
        </DialogActions>

</Dialog>
}
  return (
    <div>

        {
            getEvent ?  (
                <div className="event-container">
 

<hr />

<div className="main-event-details">
    <div className="event-details">
        <div className="details">
        <h1>{getEvent?.title}</h1>
        <h4>Hosted By:</h4>
        <h5>{getEvent?.hostedBy}</h5>
        </div>
        <div className="img-cont">
<img src={getEvent?.eventThumbnail} alt={getEvent?.id} />
        </div>
        <div className="para">
            <p>{getEvent?.eventDescription}</p>
        </div>
       
    </div>


</div>
<div className="other-info">
    <div className="button-rsvp">
        <button disabled={isPaid} onClick={handleButtonClick}>RSVP</button>
    </div>
</div>
                </div>
            ) :
            <h1>Nothing to display</h1> 
        }
    </div>
  )
}

export default EventPage