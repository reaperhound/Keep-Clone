import { useContext, useState } from "react";
import { NotesContext } from "../../context/notes.context";


export default function Note({ title, content }) {
  // const [popUp, setPopUp] = useState(false);
  // const {popUp, setPopUp} = useContext(NotesContext)
  const [popUp, setPopUp] = useState(false)

  const handlePopUp = () => {
    setPopUp(true);
    console.log(popUp);
  };

  const handleClosePopUp = () => {
    setPopUp(false);
    console.log(popUp);
  };

  function PopUp() {
    return (
      <div className="modal-box fixed top-[20%] right-[35%] h-[400px] resize-none ">
        <div className="">
          <button 
            onClick={handleClosePopUp}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </button>
          <div className="popup-body">
            <b className="text-2xl">{title}</b>
            <div className="h-3" />
            <p>{content.substring(0, 344)}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        onClick={handlePopUp}
        className={`w-[250px] p-5 bg-secondary min-h-[300px]  shadow-md rounded-md max-h-[400px] overflow-hidden `}
      >
        <b className="text-2xl">{title}</b>
        <div className="h-3" />
        <p>{content.substring(0, 344)}</p>
      </div>
      {popUp && (
        <PopUp content={content} title={title} handleClosePopUp={handleClosePopUp}/>
      )}
    </>
  );
}
