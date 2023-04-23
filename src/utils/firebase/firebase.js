// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { getDocs, getFirestore, doc, updateDoc } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";


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
    window.location.reload();
    return result;
  } catch (error) {
    console.log(error);
  }
};

//Sign Out

export const signOutUser = async () => {
  await signOut(auth);
  window.location.reload();
}

//Auth State Observer
export const onAuthStateChangedHandler = (callback) => {
  return onAuthStateChanged(auth, callback);
}


//FireStore

const db = getFirestore(app);

export async function writeDataHandler(data){
  let uid = auth.currentUser.uid

  if(data.title === "" || data.content === "") {
    console.log("Please fill in the fields")
    return;
  }

  try{
    const docRef = await addDoc(collection(db, uid), {
      title : data.title,
      content : data.content,
      date : Date()
    })
    console.log("Document created with docRef "+ docRef);
    getDataHandler();
  } catch(error) {
    console.log("Error adding document, "+ error);
  }
}

export async function getDataHandler(){
  let uid = auth.currentUser.uid;

  const colRef = collection(db, uid);
  const colSnap = await getDocs(colRef);
  const data = []

  if(!colSnap.empty){
      colSnap.forEach((element) => {
        // console.log(element._document.data.value.mapValue.fields);
        let docIdArray = element._key.path.segments;
        let content = element._document.data.value.mapValue.fields.content.stringValue;
        let title = element._document.data.value.mapValue.fields.title.stringValue
        let date = element._document.data.value.mapValue.fields.date.stringValue
        data.push({
          docIdArray,
          content,
          title,
          date
        })
      })
     return data;
  } else {
    console.log(`No data`);
  }
}

// update doc
export async function updateNoteHandler(docId, data){
  let uid = auth.currentUser.uid

  const docRef = doc(db, uid, docId)
  try {
    await updateDoc(docRef, {
      title : data.title,
      content : data.content,
      date : `(edited) ${Date()}`
    })
    alert("Updated")
  } catch (err) {
    console.log("Update",err);
    alert("Couldn't update")
  }
}
