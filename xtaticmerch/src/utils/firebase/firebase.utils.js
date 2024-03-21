import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider
 } from 'firebase/auth';
import{
    getFirestore, 
    doc,
    getDoc,
    setDoc
    
} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAw4eL9ERUvn-ksh6XeVwrxjFBAAR2RPhg",
    authDomain: "xtmerch-96626.firebaseapp.com",
    projectId: "xtmerch-96626",
    storageBucket: "xtmerch-96626.appspot.com",
    messagingSenderId: "1022616331669",
    appId: "1:1022616331669:web:996259907b11aafee5c29c"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  
  const provider = new GoogleAuthProvider();
  
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth  = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  export const db = getFirestore();

  export const createUsesrDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef); 

    if(!userSnapshot.exists()){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    return userDocRef;
  };