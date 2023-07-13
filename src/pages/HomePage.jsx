
import React, { useContext } from 'react'
import { SearchOffOutlined } from '@mui/icons-material'
import EventList from '../components/EventList';
import { AppContext } from '../context/AppContext';
import "./homepage.css"

const HomePage = () => {
  const {state, dispatch, filteredResult} = useContext(AppContext);
  return (
    <div className='home-page'>

      <div className="header">
        <h1>Meet up</h1>
        <label htmlFor="">
          <SearchOffOutlined/>
        <input value = {state.searchTag}  type="text" 
        onChange={(e)=>dispatch({type:"_search_input_", payload: e.target.value})} placeholder='Search by title and tags.'/>
        </label>
      </div>

<hr />

<div className="main-content">
  <div className="header">
    <h1>Meetup events</h1>
    <label for="eventType-selector"></label>
            <select id = "eventType-selector" onChange= {(e)=>dispatch({type:"_dropdown_", payload: e.target.value})}>
                <option value="Both">Both</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
                
            </select>
  </div>
</div>

<div className="content-container">
  {
    filteredResult?.length>0 ?  filteredResult?.map(data=>(
      <EventList event = {data} key ={data.id}/>
    ))  :
    <h1>No Event found.</h1>
  }
</div>


        
    </div>
  )
}

export default HomePage