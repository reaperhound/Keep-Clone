// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVQtrZfBGlR2-RfS-DpLqBO16XXxAgMp4",
  authDomain: "keep-clone-f9ade.firebaseapp.com",
  projectId: "keep-clone-f9ade",
  storageBucket: "keep-clone-f9ade.appspot.com",
  messagingSenderId: "626502570622",
  appId: "1:626502570622:web:750a9da96c54ec2efcfe2f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

// Sign in
export const signInWithGooglePopUp = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result;
  } catch (error) {
    console.log(error);
  }
};

//Sign Out

export const signOutUser = async () => {
  await signOut(auth);
}

//Auth State Observer
export const onAuthStateChangedHandler = (callback) => {
  return onAuthStateChanged(auth, callback);
}


//FireStore

const db = getFirestore(app);

export const writeData = async (data) => {
  const {title, content} = data
  const { uid } = auth.currentUser;
  try{
    const response = await setDoc(doc(db, uid ,title), {
      title: title,
      content: content,
    })
  
    return response;
  } catch(error){
    console.log(error);
    return error;
  }
}