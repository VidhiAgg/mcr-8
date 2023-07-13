import React from 'react'
import React, { createContext } from 'react'
import { data } from '../data/data';


export const AppContext = createContext();
const AppContext = () => {
    const [meetupData,setMeetupData] = useState(data.meetups);

  return (
<AppContext.Provider value={{meetupData,setMeetupData}}>
    
    {children}
</AppContext.Provider>  )
}

export default AppContext