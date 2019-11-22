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
 
 export const update = (userid,name) =>{
   return db.collection("user").doc(userid).update({

      name:name
   });
 }  
 export const addImage= (name, file)=>{
   var storageRef = firebase.storage().ref();
   var ref = storageRef.child(name);
   ref.put(file).then(function(snapshot){
     snapshot.ref.getDownloadURL.then(url =>{
       var userRef = db.collection("user").doc(sessionStorage.getItem("user"));
       var setwithmerger = userRef.set({
         profileimg: url
       },{merge:false});
       return url;
     })
   })
 }

 export const getImage = name =>{
    var storageRef = firebase.storage().ref();
    var ref = storageRef.child(name);
      ref.getDownloadURL().then(url =>{
      return url;
    })
  }

 export const getImage = name =>{
    var storageRef = firebase.storage().ref();
    var ref = storageRef.child(name);
      ref.getDownloadURL().then(url =>{
      return url;
    })
  }


  ///////adds
  export const adduser = (userid,name,email) =>{
    return db
    .collection("user")
    .doc(userid)
    .set({
      nombre: name,
      correo:email
    })
  }

  export const addproduct = (productid,name,price) =>{
    return db
    .collection("Product")
    .doc(productid)
    .set({
      nombre: name,
      precio: price
    })
  }

  export const addtable = (tableid,number) =>{
    return db
    .collection("table")
    .doc(tableid)
    .set({
      numero: number
     
    })
  }
  export const addorder = (orderid,name) =>{
    return db
    .collection("order")
    .doc(orderid)
    .set({
      nombre: name 
     
    })
  }
///////////gets
  export const getuser = () =>{
    const usr = [];
     db.collection("user").get().then(snapshot => {
      snapshot.forEach(doc => {
        usr.push(doc.data());
      });
    })
    .catch(err => {
      console.log('Error getting users', err);
    });
    return usr
  }

  export const getproduct = () =>{
    const prodct = [];
     db.collection("product").get().then(snapshot => {
      snapshot.forEach(doc => {
        prodct.push(doc.data());
      });
    })
    .catch(err => {
      console.log('Error getting products', err);
    });
    return prodct 
  }

  export const getorder = () =>{
    const ordr = [];
     db.collection("product").get().then(snapshot => {
      snapshot.forEach(doc => {
        ordr.push(doc.data());
      });
    })
    .catch(err => {
      console.log('Error getting orders', err);
    });
    return ordr 
  }
  
  export const getable = () =>{
    const tble = [];
     db.collection("product").get().then(snapshot => {
      snapshot.forEach(doc => {
        tble.push(doc.data());
      });
    })
    .catch(err => {
      console.log('Error getting tables', err);
    });
    return tble 
  }

  ////update

  export const update = (userid,name) =>{
    return db.collection("user").doc(userid).update({
 
       name:name
    });
  }
  export const updateproduct = (productid,name,price) =>{
   return db.collection("product").doc(productid).update({
      name:name,
      precio: price
   });
 }
  export const updatetable = (tableid,number) =>{
    return db.collection("table").doc(tableid).update({
     numero:number
    });
 }
  export const updateorder = (orderid,name) =>{
    return db.collection("order").doc(orderid).update({
     nombre:name
    });
 }
 ////delete


 export const delproduct = (productid) =>{
  return db.collection("product").doc(productid).delete();
}
 export const detable = (tableid) =>{
  return db.collection("table").doc(tableid).delete();
}
 export const delorder = (orderid) =>{
    return db.collection("order").doc(orderid).delete();
 }