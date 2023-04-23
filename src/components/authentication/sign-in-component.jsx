import React, { useContext, useState } from "react";
import { signInWithGooglePopUp, signOutUser } from "../../utils/firebase/firebase";
import { UserContext } from "../../context/user.context";


const SignInForm = () => {
  const { userVerified } = useContext(UserContext)

  const onClickHandler = async () => {
    try {
      await signInWithGooglePopUp();
    } catch (err) {
      console.log({ err });
    }
  };


  return (
    <div className="">
      {userVerified ? (
        <button className="btn btn-active btn-primary sm:text-[16px] sm:min-w-[100px] w-[60px] text-[10px] p-[1px]" onClick={signOutUser}>
          Sign Out
        </button>
      ) : (
        <button
          className="btn btn-active btn-secondary sm:text-[16px] sm:min-w-[100px] w-[60px] text-[10px] p-[1px]"
          onClick={onClickHandler}
        >
          Sign In
        </button>
      )}
    </div>
  );
};

export default SignInForm;
