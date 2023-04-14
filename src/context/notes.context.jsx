import { useEffect, useState } from "react";
import { createContext } from "react";
import { getDataHandler } from "../utils/firebase/firebase";

export const NotesContext = createContext();

export function NotesProvider({ children }) {
  const [notes, setNotes] = useState(null);
  const values = {
    notes,
    setNotes,
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDataHandler()
      setNotes(data)
    ;}

    const delay = 3000; // Delay in milliseconds
    const timeoutId = setTimeout(fetchData, delay);

    return () => clearTimeout(timeoutId)
  },[])

  
  return (
    <NotesContext.Provider value={values}>{children}</NotesContext.Provider>
  );
}
