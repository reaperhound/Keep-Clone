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
        <button className="btn btn-active btn-primary min-w-[100px]" onClick={signOutUser}>
          Sign Out
        </button>
      ) : (
        <button
          className="btn btn-active btn-secondary min-w-[100px]"
          onClick={onClickHandler}
        >
          Sign In
        </button>
      )}
    </div>
  );
};

export default SignInForm;
