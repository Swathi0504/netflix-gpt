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
import { toggleGpt } from '../utils/gptSlice';
import { SUPPORTED_LANG } from '../utils/constants';
import { changelang } from '../utils/langSlice';

const Header = () => {
  
  const user = useSelector((store)=>store.user);

  const GPTpage = useSelector((store)=>store.gpt.showGptSearch);

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
   
  const handleGpt = () => {
    dispatch(toggleGpt())
  }

  const handlelangClick = (e) => {
      dispatch(changelang(e.target.value));
  }

  return (
    <div className="absolute w-full px-12 py-4 z-10 flex justify-between bg-gradient-to-b from-black">
        <img className="w-28" src={LOGO_URL}/>
        {
          user && <div className="mt-2 flex">
          {
            GPTpage && <select className='text-white bg-gray-800 rounded-md p-2 -mt-1' onChange={handlelangClick}>
              {/* <option value="en">English</option>
              <option value="tamil">Tamil</option>
              <option value="hindi">Hindi</option>
              <option value="spanish">Spanish</option> */}
              {
                   SUPPORTED_LANG.map((lang)=>{
                    return <option value={lang.identifier} key={lang.identifier}>{lang.name}</option>
                   })
              }
            </select>
          }
      
          <h1 onClick={handleGpt} className='text-white flex-none px-6 cursor-pointer'>{GPTpage?"Home":"GPT"}</h1>  
          <h1 className='px-2 flex-none text-white font-semibold'>{user?.displayName}</h1>
          <h1 onClick={handleSignout} className='text-white flex-none px-4 cursor-pointer'>Signout</h1>
          <img className="w-8 h-8 mx-2" src={USER_ICON}/>
          </div>
        }  
    </div>
  )
}

export default Header