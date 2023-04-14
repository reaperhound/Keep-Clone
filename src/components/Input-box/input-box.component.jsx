import React, { useState } from "react";
import { writeDataHandler } from "../../utils/firebase/firebase";
import { FormProvider, useForm } from "react-hook-form";



const InputBox = ({ ...otherProps }) => {
  const { register, handleSubmit } = useForm();
  const [focus, setFocus] = useState(false)

  function formSubmit(e){
    e.preventDefault()
  }

  const onBtnSubmitHandler = (data) => {
    console.log(data);
    writeDataHandler(data);
  }

  return (
    <>
      <form onSubmit={formSubmit}>
        <div className="w-[100%] flex flex-col justify-center items-center mt-[10%]">
            <input
              className="input input-bordered w-full max-w-xs mr-3"
              placeholder="Title..."
              {
                ...register("title")
              }
              onClick={()=> setFocus(true)}
              // onBlur={() => setFocus(false)}
            />
            {
              focus ? 
              <textarea
                placeholder="Content..."
                className="textarea textarea-bordered w-[320px] mr-3 resize-none "
                {
                  ...register("content")
                }
              />
              : null
            }
            <button onClick={handleSubmit(onBtnSubmitHandler)} className="btn btn-primary mt-4">Button</button>
          </div>
      </form>
    </>
  );
};

export default InputBox;
