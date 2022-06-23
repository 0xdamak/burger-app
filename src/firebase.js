// import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBOHMjf0bWV4aphFihYCRUpiaWChLWnbEU",
  authDomain: "burger-app-6ed8f.firebaseapp.com",
  projectId: "burger-app-6ed8f",
  storageBucket: "burger-app-6ed8f.appspot.com",
  messagingSenderId: "128373553341",
  appId: "1:128373553341:web:2d9c694becac524c24dfd4",
  measurementId: "G-R7Q8H7ZX18",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
export async function signInWithGoogle() {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
}

export async function logInWithEmailAndPassword(email, password) {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    toast.success(`Welcome ${response.user.email}!!!`);
  } catch (error) {
    toast.log("Invalid Email or Password");
  }
}

export async function signUpWithEmailAndPassword(
  firstName,
  lastName,
  phoneNo,
  address,
  state,
  city,
  email,
  password
) {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      authProvider: "local",
      firstName,
      lastName,
      phoneNo,
      address,
      state,
      city,
      email,
    });
    toast.success(`Account created successfully`);
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      toast.error("Email is already in use");
    } else {
      toast.error("An error occurred");
    }

    if (error.code) {
    }
    // console.log(error.code);
    return error.code;
  }
}

export async function sendPasswordReset(email) {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
}

export function logout() {
  signOut(auth);
}
