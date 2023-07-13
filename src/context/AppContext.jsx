import React from 'react'
import React, { createContext } from 'react'


export const AppContext = createContext();
const AppContext = () => {
    const [dataDsisplay,setDataDisplay] = useState(data);

  return (
<AppContext.Provider value={{dataDsisplay}}>
    
    {children}
</AppContext.Provider>  )
}

export default AppContext