import React from 'react';
import { signOut  } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { addUser,removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { LOGO_URL, USER_ICON } from '../utils/constants';

const Header = () => {
  
  const user = useSelector((store)=>store.user);

  const navigate = useNavigate();

  const dispatch = useDispatch();


  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unmounting
    return ()=> unsubscribe();
  },[]);

  const handleSignout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(removeUser());
     // navigate("/");
    }).catch((error) => {
     // navigate("/error");
      // An error happened.
    });
  }

  return (
    <div className="absolute w-full px-12 py-4 z-10 flex justify-between bg-gradient-to-b from-black absolute">
        <img className="w-28" src={LOGO_URL}/>
        {
          user && <div className="mt-2 flex">
            <img className="w-8 h-8 mx-2" src={USER_ICON}/>
          <h1 onClick={handleSignout} className='text-white flex-none px-4 cursor-pointer'>Sign out</h1> 
          <h1 className='px-4 flex-none text-white font-semibold'>{user?.displayName}</h1>
          </div>
        }  
    </div>
  )
}

export default Header