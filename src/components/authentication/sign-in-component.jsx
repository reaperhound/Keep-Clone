import React, { useState } from "react";
import { signInWithGooglePopUp, signOutUser } from "../../utils/firebase/firebase";


const SignInForm = () => {
  const [emailVerified, setEmailVerified] = useState(false);

  const onClickHandler = async () => {
    try {
      const result = await signInWithGooglePopUp();
      setEmailVerified(result.user.emailVerified);
      console.log(result.user);
    } catch (err) {
      console.log({ err });
    }
  };

  const signOutHandler = async () => {
    await signOutUser();
    setEmailVerified(false);
  };

  return (
    <div className="">
      {emailVerified ? (
        <button className="btn btn-active btn-primary" onClick={signOutHandler}>
          Sign Out
        </button>
      ) : (
        <button
          className="btn btn-active btn-secondary"
          onClick={onClickHandler}
        >
          Sign In
        </button>
      )}
    </div>
  );
};

export default SignInForm;
