import { useEffect, useState } from "react";
import { createContext } from "react";
import { getDataHandler } from "../utils/firebase/firebase";

export const NotesContext = createContext();

export function NotesProvider({ children }) {
  const [notes, setNotes] = useState(null);
  const [popUp, setPopUp] = useState(false)
  const [refetchNotes, setrefetchNotes] = useState(false);
  const values = {
    notes,
    setNotes,
    popUp,
    setPopUp,
    refetchNotes,
    setrefetchNotes
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDataHandler()
      setNotes(data)
    ;}

    const delay = 3000; // Delay in milliseconds
    const timeoutId = setTimeout(fetchData, delay);
    refetchNotes && setrefetchNotes(false)

    return () => clearTimeout(timeoutId)
  },[refetchNotes])

  
  return (
    <NotesContext.Provider value={values}>{children}</NotesContext.Provider>
  );
}
