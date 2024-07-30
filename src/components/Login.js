import React, { useState,useRef } from 'react'
import Header from './Header'
import { validateData } from '../utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';

const Login = () => {



  const navigate = useNavigate();
   
  const [IsSignin, setIsSignin] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null); 
  const name = useRef(null);
  
  const dispatch = useDispatch();


 

  const toggelFunction = () => {
      setIsSignin(!IsSignin);
      seterrorMessage(null);
      email.current.value=null;
      password.current.value=null;
  }

  const handleButtonClick = () => {
    const message=validateData(email.current.value,password.current.value);
    //console.log(message);
    seterrorMessage(message);
    if(message) return;

    if(!IsSignin) {
      //Sign up form
        createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            // Profile updated!
            // ...
            const {uid,email,displayName} = user;
            dispatch(addUser({uid:uid,email:email,displayName:displayName}));
          }).catch((error) => {
            // An error occurred
            // ...
          });
          navigate("/browse");
          //console.log(userCredential);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorMessage);
          // ..
        });

    }
    else {
      //Sign in form
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        seterrorMessage("Logged in successfully.")
        navigate("/browse");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrorMessage(errorMessage);
      });
      }
  }

  return (
    <div className="w-[500px]">
      <Header/>
      {/* <div className="absolute w-screen px-36 py-2 bg-gradient-to-b from-black z-10">
        <img className="w-48" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"/>
      </div>
      */}
      <div className="absolute">
      <img alt="logo" src="https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_large.jpg"/>  
      </div>  
        <form onSubmit={(e)=>{
              e.preventDefault();
        }} className="bg-black bg-opacity-85 mx-[550px] my-[100px] py-10 w-[400px] rounded-md absolute">
          <h1 className='text-white text-3xl pl-14 mt-4 mb-4 font-bold'>{IsSignin?"Sign in":"Sign Up"}</h1>
          {!IsSignin&&
            <input ref={name} className="w-72 p-2 my-2 mx-14 h-14 rounded-sm bg-transparent border border-gray-500 text-white" placeholder="Name" type="name"/>
          }
          <input ref={email} className="w-72 p-2 my-2 mx-14 h-14 rounded-sm bg-transparent border border-gray-500 text-white" placeholder="Email" type="email"/>
          <input ref={password} className="w-72 p-2 my-2 mx-14 h-14 rounded-sm bg-transparent border border-gray-500 text-white" placeholder="Password" type="Password"/>
          {!IsSignin&&
            <input className="w-72 p-2 my-2 mx-14 h-14 rounded-sm bg-transparent border border-gray-500 text-white" placeholder="Re-enter Password" type="Password"/>
          }
          <p className="w-72 mx-14 text-xs text-red-600">{errorMessage}</p>
          <button onClick={handleButtonClick} className="w-72 p-2 my-2 mx-14 h-10 rounded-sm bg-red-600 border-gray-500 text-white font-bold">{IsSignin?"Sign in":"Sign Up"}</button>
          <p className="text-gray-400  mx-48 my-4">OR</p>
          <p className="text-gray-400  mx-14 my-4">{IsSignin?"New to Netflix?":"Aldready registered?"}<a className="text-white font-semibold cursor-pointer" onClick={toggelFunction}>{IsSignin?" Sign up now.":" Sign in."}</a></p>
        </form>
       
    </div>
  )
}

export default Login