import React from 'react'

export default function Login() {

    const Submit = () =>{
        console.log("LoginPage");
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
    <button className="rounded-full ..." onClick={Submit}>Login</button>
    <a href='/signup'>Signup</a>
    </>
  )
}
