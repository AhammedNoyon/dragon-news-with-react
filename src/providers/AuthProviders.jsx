import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
// import { createUserWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext();
// eslint-disable-next-line react/prop-types
const AuthProviders = ({ children }) => {
  //state
  const [user, setUser] = useState(null);
  console.log("this is currentUser : ", user);
  //create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //Login In
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //sign out
  const signOutUser = () => {
    return signOut(auth);
  };

  //email verification
  const emailVerification = () => {
    return sendEmailVerification(auth.currentUser);
  };

  //observer in user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser);
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      return () => {
        unSubscribe();
      };
    });
  }, []);

  const authInfo = {
    name: "x",
    user,
    createUser,
    signInUser,
    signOutUser,
    emailVerification,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
