import React, { useContext, useState } from "react";
import { writeDataHandler, getDataHandler } from "../../utils/firebase/firebase";
import { FormProvider, useForm } from "react-hook-form";
import { NotesContext } from "../../context/notes.context";



const InputBox = ({ ...otherProps }) => {
  const { register, handleSubmit,reset } = useForm();
  const [titleVisible, setTitleVisible] = useState(false);
  const {refetchNotes, setrefetchNotes } = useContext(NotesContext)

  function formSubmit(e){
    e.preventDefault()
  }

  const onBtnSubmitHandler = (data) => {
    console.log(data);
    writeDataHandler(data);
    reset();
    !refetchNotes && setrefetchNotes(true);
  }

  const handleFocusOut = (event) => {
    let relatedTarget = event.relatedTarget;
    if (!relatedTarget) {
      setTitleVisible(false);
    }
  };

  const output = async () => {
    const data = await getDataHandler();
  }

  return (
    <>
      <form onSubmit={formSubmit} onBlur={handleFocusOut}>
        <div className="w-[100%] flex flex-col justify-center items-center mt-[10%]">
            {
              titleVisible &&
              <input
              className="input input-bordered w-full max-w-xs mr-3"
              placeholder="Title..."
              {
                ...register("title",{
                  required : true,
                })
              }
            />
            }
            <textarea
              placeholder="Take Note..."
              className={
                `textarea textarea-bordered w-[320px] mr-3 resize-none 
                  ${
                    titleVisible ? "h-[120px]"
                    : "h-[20px]"
                  }
                `}
              {
                ...register("content", {
                  required: true,
                  maxLength: 200,
                })
              }
              onFocus={() => setTitleVisible(true)}
            />
            <button onClick={handleSubmit(onBtnSubmitHandler)} className="btn btn-primary mt-4">Add</button>
          </div>
      </form>
      <button className="btn btn-secondary mt-4" onClick={output} >get Data</button>
    </>
  );
};

export default InputBox;
