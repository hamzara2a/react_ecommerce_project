import { createContext, useState } from "react";


// the actual value I want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})

// the actual component that will return something
//UserContext.Provider will be wrapped around anything that needs to be accessed by other components!
export const UserProvider = ({ children }) => {

    // This allows the children to use any of the 'values' from the UserContext component
    const [currentUser, setCurrentUser] = useState(null)
    const value = { currentUser, setCurrentUser };

    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}



 