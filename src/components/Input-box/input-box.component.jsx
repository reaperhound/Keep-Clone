import React, { useState } from "react";
import { writeDataHandler } from "../../utils/firebase/firebase";
import { FormProvider, useForm } from "react-hook-form";



const InputBox = ({ ...otherProps }) => {
  const { register, handleSubmit } = useForm();
  const [titleVisible, setTitleVisible] = useState(false);

  function formSubmit(e){
    e.preventDefault()
  }

  const onBtnSubmitHandler = (data) => {
    console.log(data);
    writeDataHandler(data);
  }

  const handleFocusOut = (event) => {
    let relatedTarget = event.relatedTarget;
    if (!relatedTarget) {
      setTitleVisible(false);
    }
  };

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
                ...register("title")
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
                ...register("content")
              }
              onFocus={() => setTitleVisible(true)}
            />
            <button onClick={handleSubmit(onBtnSubmitHandler)} className="btn btn-primary mt-4">Button</button>
          </div>
      </form>
    </>
  );
};

export default InputBox;
