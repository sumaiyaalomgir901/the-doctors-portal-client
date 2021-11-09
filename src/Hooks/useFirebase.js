import { useState, useEffect } from "react";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import firebaseInitialize from "../Firebase/Firebase.init";
import Swal from "sweetalert2";

//Firebase initialize call
firebaseInitialize();

const useFirebase = () => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();

  // ======================== Google sign in

  const handleGoogleSignIn = (history, location) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        // console.log("user", user);
        const destination = location?.state?.from || "/home";
        history.replace(destination);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // ======================== User  Register
  const handleRegister = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);

        Swal.fire("Successfully!", "", "success");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((result) => {
    //     const user = result.user;
    //     setUser(user);
    //     console.log(user);

    //     Swal.fire("Successfully!", "", "success");

    //     const newUserr = { email, displayName: name };
    //     setUser(newUserr);
    //     //////
    //     updateProfile(auth.currentUser, {
    //       displayName: name,
    //     })
    //       .then(() => {})
    //       .catch((error) => {
    //         setError(error.message);
    //       });

    //     const destination = "/login";
    //     history.replace(destination);
    //   })
    //   .catch((error) => {
    //     setError(error.message);
    //   })
    //   .finally(() => setIsLoading(false));
  };
  //=============================================
  // ======================== User  Login
  const handleLogin = (email, password, history, location) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setError("");
        Swal.fire("Successfully LogIn!", "", "success");

        const redirect_uri = location?.state?.from || "/home";
        history.replace(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // ============================= User  on Auth State Changed
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, [auth]);
  // ======================== Sign Out
  const logOut = () => {
    setIsLoading(true);

    signOut(auth)
      .then(() => {
        setUser({});

        Swal.fire("Successfully Logout", "See you again.", "success");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // ======================= return
  return {
    user,
    error,
    logOut,
    isLoading,
    handleGoogleSignIn,
    handleRegister,
    handleLogin,
  };
};

export default useFirebase;
