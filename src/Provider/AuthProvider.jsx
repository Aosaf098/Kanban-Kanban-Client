import React, { createContext, useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/Firebase/firebase.config";
import { createNewUserDB } from "@/api/api";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        const newUser = {
          email: result?.user?.email,
          displayName: result?.user?.displayName,
        };
        createNewUserDB(newUser).then((data) => {
          if (data?.insertedId) {
            alert('New User Registered Successfully')
          }
        }).catch((err) => {
          console.log(err.message)
        })
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const authInfo = { googleSignIn };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
