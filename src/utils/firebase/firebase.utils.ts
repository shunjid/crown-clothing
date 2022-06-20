import { initializeApp } from 'firebase/app'
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  NextOrObserver,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
} from 'firebase/auth'
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  writeBatch,
} from 'firebase/firestore'
import { TCategoryToProductsMap } from '../../types'

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

export const addCollectionAndDocuments = async (
  collectionKey: string,
  objectsToAdd: any,
  field: string
) => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)

  objectsToAdd.forEach((obj: any) => {
    const newDocRef = doc(collectionRef, obj[field].toLowerCase())
    batch.set(newDocRef, obj)
  })

  await batch.commit()
}

export const getProductsByCategories = async () => {
  const collectionRef = collection(db, 'categories')
  const queryToRun = query(collectionRef)
  const querySnapshot = await getDocs(queryToRun)

  return querySnapshot.docs.reduce((acc, document) => {
    const { title, items } = document.data()
    acc[title.toLowerCase()] = items
    return acc
  }, {} as TCategoryToProductsMap)
}

export const createUserDocumentFromAuth = async (
  userAuth: User,
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

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => {
  return onAuthStateChanged(auth, callback)
}
