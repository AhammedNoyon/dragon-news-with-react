import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  TwitterAuthProvider,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";

//context
export const AuthContext = createContext();
// eslint-disable-next-line react/prop-types
const AuthProviders = ({ children }) => {
  //state
  const [user, setUser] = useState(null);
  console.log("this is currentUser : ", user);

  //provider
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

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

  //google login
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  //github login
  const signInWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };
  //twitter login
  const signInWithTwitter = () => {
    return signInWithPopup(auth, twitterProvider);
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
    signInWithGoogle,
    signInWithGithub,
    signInWithTwitter,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
