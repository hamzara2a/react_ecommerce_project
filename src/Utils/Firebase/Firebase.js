// functions that we need
import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'


// firebase configuration for my web app
const firebaseConfig = {
    apiKey: "AIzaSyDKYzBgELg5byZIFPFMxPWOA32po49Mtts",
    authDomain: "react-ecommerceproject-db.firebaseapp.com",
    projectId: "react-ecommerceproject-db",
    storageBucket: "react-ecommerceproject-db.appspot.com",
    messagingSenderId: "115899179583",
    appId: "1:115899179583:web:3ef8265ecb0fbc201d0e8a"
  };

// Initializing firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();

// Using the Google provider-------------------
export const signInWithGooglepopup = () => 
signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () => 
signInWithRedirect(auth, googleProvider);

export const db = getFirestore();


// Create the user document------------------------
export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {

    if(!userAuth) return;
    
    const userDocRef = doc(db, 'users', userAuth.uid);

    //create a special object using getDoc
    //now we can use userSnapshot.exists() to check whether the doc exists
    const userSnapshot = await getDoc(userDocRef)

    //if user data does not exist, set the document inside the database
    if(!userSnapshot.exists()) {

        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            })
        } catch (err) {
            console.log('error creating user', err.message)
        }
    }

    return userDocRef

} 

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password)
} 