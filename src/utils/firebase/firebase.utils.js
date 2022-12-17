import { initializeApp } from 'firebase/app';
import { getAuth,
        signInWithPopup,
        GoogleAuthProvider,
        createUserWithEmailAndPassword,
      } from 'firebase/auth';
import { 
        getFirestore,
        doc,
        getDoc,
        setDoc
 } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB7Yxm9E_IGP5A1nDCkWBPP2QxdgUtvEL0",
  authDomain: "shop-a22c4.firebaseapp.com",
  projectId: "shop-a22c4",
  storageBucket: "shop-a22c4.appspot.com",
  messagingSenderId: "970316736072",
  appId: "1:970316736072:web:f64d8743a065cd4d9d1a7d"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ 
  prompt: 'select_account' 
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if(!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  //if user data exists
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
