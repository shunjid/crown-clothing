import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopUp = () => signInWithPopup(auth, googleProvider)
export const db = getFirestore()

export const createUserDocumentFromAuth = async (
  userAuth: {
    uid: string
    displayName: string | null
    email: string | null
  },
  additionalInformation: any = {}
) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapShot = await getDoc(userDocRef)

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      })
    } catch (error) {
      return null
    }
  }

  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (
  email?: string,
  password?: string
) => {
  if (!email && !password) throw new Error('Email and password are required')
  return await createUserWithEmailAndPassword(auth, email!, password!)
}

export const signInAuthUserWithEmailAndPassword = async (
  email?: string,
  password?: string
) => {
  if (!email && !password) throw new Error('Email and password are required')
  return await signInWithEmailAndPassword(auth, email!, password!)
}

export const signOutUser = async () => await signOut(auth)
