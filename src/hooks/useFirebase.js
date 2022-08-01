import  { useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState('');
  const navigate = useNavigate()
  let location = useLocation();
 
  let from = location?.state?.from?.pathname || "/profile";
 
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      const user = result.user;
      localStorage.setItem("user", user);
      if(user){
        navigate(from, { replace: true })
      }
     
    });
  };

  const handleSignOut = () => {
    signOut(auth).then(() => {});
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return {
    user,
    signInWithGoogle,
    handleSignOut,
  };
};

export default useFirebase;
