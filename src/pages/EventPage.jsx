import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";


import "./eventpage.css"
import { ModeEdit, SearchOffOutlined } from '@mui/icons-material';

const EventPage = () => {
    const {id} = useParams();
    const {meetupData,state, dispatch,} = useContext(AppContext);
    
    const [rsvp, setRsvp] = useState();
    const [showModal, setShowModal] = useState(false);
    const getEvent = meetupData?.find((data)=> data.id === id);
    const [isPaid, setIsPais] = useState(false);
const handleButtonClick =(e) =>{
    
setShowModal(true)
}

const model = <Dialog open={showModal} onClose={setShowModal}>

  
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
        <Button onClick={(e)=> {setIsPais(true); setShowModal(false)}}>Submit</Button>
      
      </DialogActions>

</Dialog>

  return (
    <div>

        {
            getEvent ?  (
                <div className="event-container">
  <div className="header">
        <h1>Meet up</h1>
        <label htmlFor="">
          <SearchOffOutlined/>
        <input value = {state.searchTag}  type="text" 
        onChange={(e)=>dispatch({type:"_search_input_", payload: e.target.value})} placeholder='Search by title and tags.'/>
        </label>
      </div>


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
    <div className="other-info">
    <div className="button-rsvp">
        <button disabled={isPaid} onClick={handleButtonClick}>RSVP</button>
    {model}
    </div>

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