import React from 'react'
import { signOut  } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
  
  const user = useSelector((store)=>store.user);

  const navigate = useNavigate();

  const handleSignout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      navigate("/error");
      // An error happened.
    });
  }

  return (
    <div className="absolute w-[1515px] px-36 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img className="w-32" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"/>
        {
          user && <div className="py-2 flex">
            <img src="https://occ-0-2164-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"/>
          <button onClick={handleSignout} className='text-white px-4'>Signout</button> 
          <h1 className='px-4 flex-none py-2 text-red-600 font-semibold'>{user?.displayName}</h1>
          </div>
        }  
    </div>
  )
}

export default Header