import React, { useState } from "react";
import { writeData } from "../../utils/firebase/firebase";

const defaultVal = {
  title: "nn",
  content: "",
};

const InputBox = ({ ...otherProps }) => {
  const [content, setContent] = useState(defaultVal);

  const handleChange = (event) => {
    setContent({ ...content, content: event.target.value });
  };

  const onClickHandler = async() => {
    const response = await writeData(content);
    console.log(`from input`, response);
  }

  const [focus, setFocus] = useState(false)

  return (
    <>
      <div className="w-[100%] flex flex-col justify-center items-center mt-[10%]">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs mr-3"
          value={content.content}
          onChange={handleChange}
          onClick={()=> setFocus(true)}
          // onBlur={() => setFocus(false)}
        />
        {
          focus ? 
          <textarea 
          className="textarea textarea-bordered w-[320px] mr-3 resize-none " placeholder="Bio"          ></textarea>
          : null
        }
        <button onClick={onClickHandler} className="btn btn-primary mt-4">Button</button>
      </div>
    </>
  );
};

export default InputBox;
