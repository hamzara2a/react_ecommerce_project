// functions that we need
import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionReference = collection(db, collectionKey)
    const batch = writeBatch(db)

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionReference, object.title.toLowerCase())
        batch.set(docRef, object) //set the value of docRef, with the object!
    })

    await batch.commit();
    console.log("done!");
}

export const getCategoriesAndDocuments = async () => {
    const collectionReference = collection(db, 'categories');
    const q = query(collectionReference)

    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(docSnapshot => docSnapshot.data())

}
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

export const signOutUser =  async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(
            auth,
            (userAuth) => {
               unsubscribe();
               resolve(userAuth);
            },
            reject
        )
    })
}