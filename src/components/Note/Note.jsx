import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { updateNoteHandler } from "../../utils/firebase/firebase"
import { NotesContext } from "../../context/notes.context";

export default function Note({ title, content, docIdArray }) {
  const { register, handleSubmit } = useForm();
  const [popUp, setPopUp] = useState(false);
  const { refetchNotes, setrefetchNotes } = useContext(NotesContext)

  const handlePopUp = () => {
    setPopUp(true);
    console.log(popUp);
  };

  const handleClosePopUp = () => {
    setPopUp(false);
    console.log(popUp);
  };

  const popUpSubmit = async (data) => {
    let docId = docIdArray[6] // because the docId is the last item in the array
    updateNoteHandler(docId,data)
    !refetchNotes && setrefetchNotes(true)
  }

  function PopUp() {
    console.log(register("title"));
    return (
      <div className="modal-box fixed sm:top-[30%] sm:left-[34%] sm:h-[400px] h-[300px] inset-6 top-[250px]  resize-none ">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="">
            <button
              onClick={handleClosePopUp}
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </button>
            <div className="popup-body">
              <input
                className="bg-[#e4d8b4] text-2xl w-full"
                defaultValue={title}
                {
                  ...register("title")
                }
              />
              <div className="h-full" />
              <textarea
                className="bg-[#e4d8b4] w-full h-[200px]"
                defaultValue={content.substring(0, 344)}
                {
                  ...register("content",{
                    maxLength : 200,
                  })
                }
              />
            </div>
          </div>
          <button
          type="submit"
            onClick={handleSubmit(popUpSubmit)}
           className="btn btn-active btn-secondary absolute bottom-10">
            Save
          </button>
        </form>
      </div>
    );
  }

  return (
    <>
      <div
        onClick={handlePopUp}
        className={`w-[250px] p-5 bg-secondary min-h-[300px]  shadow-md rounded-md max-h-[400px] overflow-hidden break-words `}
      >
        <b className="text-2xl">{title}</b>
        <div className="h-3" />
        <p className="">{content.substring(0, 344)}</p>
      </div>
      {popUp && (
        <PopUp
          content={content}
          title={title}
          handleClosePopUp={handleClosePopUp}
        />
      )}
    </>
  );
}
