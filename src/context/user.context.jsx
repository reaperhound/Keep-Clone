import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedHandler } from "../utils/firebase/firebase"

const UserContext = createContext({
  userVerified : false, //You don't need this object since there is a state inside of UserProvider but I'm adding this because it gives authcomplete in other files when called
  setUserVerified : ()=>{}
});

const UserProvider= ({ children }) => {
  const [userVerified , setUserVerified] = useState(false);
  const value = {userVerified, setUserVerified}

  useEffect(()=>{
    const unsubscribe = onAuthStateChangedHandler((user) => {
      if(user){
        setUserVerified(true)
      }
      else{
        setUserVerified(false);
      }
    })

    return unsubscribe
  },[])
  
  return (
    <UserContext.Provider value={value} >
      { children }
    </UserContext.Provider>
  )
}

export {UserContext, UserProvider}