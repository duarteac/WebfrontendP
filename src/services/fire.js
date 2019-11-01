import firebase from 'firebase';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/firebase-storage';



 firebase.initializeApp({
    apiKey: "AIzaSyCgiT9wzMdwJN5hUMaRtTTogjoPRDpFMus",
    authDomain: "hades-3f914.firebaseapp.com",
    databaseURL: "https://hades-3f914.firebaseio.com",
    projectId: "hades-3f914",
    storageBucket: "",
    messagingSenderId: "28554651633",
    appId: "1:28554651633:web:2ceaf29ef7cbed66478650",
    measurementId: "G-TYXGLF0V02"
    //  apiKey: process.env.REACT_APP_APIKEY,
    //  authDomain: process.env.REACT_APP_AUTHDOMAIN,
      // databaseURL: process.env.REACT_APP_DATABASEURL,
      //  projectId: process.env.REACT_APP_PROJECTID,
     //   messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
     //  appId: process.env.REACT_APP_APPID,
     // measurementId: process.env.REACT_APP_MEASUREMENTID  
});

const auth = firebase.auth();
const db = firebase.firestore();
export const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
}
export const signup = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
}
export const signout = () => {
  return auth.signOut();
}
export const passwordRecovery = (email) => {
  return auth.sendPasswordResetEmail(email);
}

export const getUsers = () =>{
  const usr = [];
  let users = db.collection('user');
  let allUsers = users.get()
  .then(snapshot => {
    snapshot.forEach(doc => {
      usr.push(doc.data());
    });
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });
  return usr
}
 
 export const update = (userid,email,name) =>{
   return db.collection("user").doc(userid).update({

      name:name,
      email:email
   });
 } 

  export const adduser = (userid,name,email) =>{
    return db
    .collection("user")
    .doc(userid)
    .set({
      nombre: name,
      correo:email

    })
  }

