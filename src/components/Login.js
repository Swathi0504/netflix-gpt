import React, { useState } from 'react'
import Header from './Header'
import { Form,Formik } from 'formik';
const Login = () => {

  const [IsSignin, setIsSignin] = useState(true);

  const toggelFunction = () => {
      setIsSignin(!IsSignin);
  }

  return (
    <div>
      <Header />
      <div className="absolute">
      <img alt="logo" src="https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_large.jpg"/>  
      </div>
      <Formik>
        <Form className="bg-black bg-opacity-85 mx-[550px] my-[100px] py-10 w-[400px] rounded-md absolute">
          <h1 className='text-white text-3xl pl-14 mt-4 mb-4 font-bold'>{IsSignin?"Sign in":"Sign Up"}</h1>
          {!IsSignin&&
            <input className="w-72 p-2 my-2 mx-14 h-14 rounded-sm bg-transparent border border-gray-500 text-white" placeholder="Name" type="name"/>
          }
          <input className="w-72 p-2 my-2 mx-14 h-14 rounded-sm bg-transparent border border-gray-500 text-white" placeholder="Email" type="email"/>
          <input className="w-72 p-2 my-2 mx-14 h-14 rounded-sm bg-transparent border border-gray-500 text-white" placeholder="Password" type="Password"/>
          {!IsSignin&&
            <input className="w-72 p-2 my-2 mx-14 h-14 rounded-sm bg-transparent border border-gray-500 text-white" placeholder="Re-enter Password" type="Password"/>
          }
          <button className="w-72 p-2 my-2 mx-14 h-10 rounded-sm bg-red-600 border-gray-500 text-white font-bold">{IsSignin?"Sign in":"Sign Up"}</button>
          <p className="text-gray-400  mx-48 my-4">OR</p>
          <p className="text-gray-400  mx-14 my-4">{IsSignin?"New to Netflix?":"Aldready registered?"}<a className="text-white font-semibold cursor-pointer" onClick={toggelFunction}>{IsSignin?" Sign up now.":" Sign in."}</a></p>
        </Form>
        </Formik>
    </div>
  )
}

export default Login