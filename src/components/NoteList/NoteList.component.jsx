import { useContext } from "react";
import Note from "../Note/Note";
import { NotesContext } from "../../context/notes.context";
import { ClimbingBoxLoader } from "react-spinners";

export default function NoteList() {
  const { notes } = useContext(NotesContext);
  console.log(notes);

  return (
    <div className="flex gap-5 p-[100px] flex-wrap ">
      {notes == null ? (
        <ClimbingBoxLoader className="mx-auto" color="#a4cbb4" />
      ) : (
        <>
          {
            notes.map((note) => {
              return (
                <Note {...note} />
              )
            })
          }
        </>
      )}
    </div>
  );
}
