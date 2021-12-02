import { useState, useEffect } from "react";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
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
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();

  // ======================== Google sign in

  const handleGoogleSignIn = (history, location) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        saveUserGoogle(user.email, user.displayName);
        // console.log("user", user);
        const destination = location?.state?.from || "/home";
        history.replace(destination);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // =================================== User  Register
  const handleRegister = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        saveUser(email, name);
        //--------
        Swal.fire("Successfully Register!", "Thank you", "success");
        //----------
        history.replace("/");
        //-----------
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
      })
      .catch((error) => {
        setError(error.message);
        // ..
      })
      .finally(() => setIsLoading(false));
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

  // ============================= User observe on Auth State Changed
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
  //////
  //
  useEffect(() => {
    fetch(`https://desolate-harbor-16717.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);
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
  // ====================================== Save USer
  const saveUser = (email, displayName) => {
    const user = { email, displayName };
    fetch("https://desolate-harbor-16717.herokuapp.com/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };
  // ====================================== Save USer for google
  const saveUserGoogle = (email, displayName) => {
    const user = { email, displayName };
    fetch("https://desolate-harbor-16717.herokuapp.com/users", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };
  // ======================= return
  return {
    user,
    admin,
    error,
    logOut,
    isLoading,
    handleGoogleSignIn,
    handleLogin,
    handleRegister,
  };
};

export default useFirebase;
