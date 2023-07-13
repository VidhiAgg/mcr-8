import React, { useReducer, createContext, useState } from 'react'
import { data } from '../data/data';
import { reducer } from '../reducer/reducer';


export const AppContext = createContext();
const AppContextProvider = ({children}) => {
    const intialState ={
        searchTag:"",
        dropownTag:"Both"
    }
    const [meetupData,setMeetupData] = useState(data.meetups);
const [state, dispatch]  = useReducer(reducer,intialState);
  
const filterBySearchBox = state.searchTag ? 
meetupData.filter(({title,eventTags })=> 
title.toLowerCase().includes(state.searchTag.toLowerCase()) || 
eventTags.some(data=> data.toLocaleLowerCase().includes(state.searchTag)))
 : meetupData;

 const filteredResult = state.dropownTag === "Both" ? filterBySearchBox :
 filterBySearchBox?.filter(({eventType})=> eventType === state.dropownTag )
  
  return (
<AppContext.Provider value={{meetupData,
    setMeetupData, state, dispatch, filteredResult}}>
    
    {children}
</AppContext.Provider>  )
}

export default AppContextProvider