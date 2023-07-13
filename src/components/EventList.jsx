import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./eventlist.css"

const EventList = ({event}) => {
    const navigate = useNavigate();
const {id, title, eventType,eventStartTime, eventThumbnail } = event
  return (
    <div className='event-conatiner' onClick={(e)=>{e.stopPropagation();navigate(`event/${id}`)}}>
        <div className="image-tag">
            <img src={eventThumbnail} alt={id} />
            <p>{eventType}</p>
        </div>
        <div className="contetnt">
            <p>{eventStartTime}</p>
            <h2>{title}</h2>
        </div>
    </div>
  )
}

export default EventList