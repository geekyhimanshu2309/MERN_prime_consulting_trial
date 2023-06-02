import React from 'react'

export default function Signup() {

    const Submit = () =>{
        console.log("SignupPage");
    }

  return (
    <>
    <h1>Login</h1>
    <p>
        UserName
    </p>
    <input placeholder='Enter User Name'/>
    <p>
        Password
    </p>
    <input placeholder='Enter Password'/>
    <button className="rounded-full ..." onClick={Submit}>Singup</button>
    </>
  )
}
