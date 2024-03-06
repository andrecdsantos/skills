'use client'
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

const LoginBtn = () => {
  return (
    <button 
        className="flex gap-2 items-center border border-neutral-900 p-2 rounded-md"
        onClick={()=>signIn('google', {callbackUrl: '/profile'} )}
    >            
            <FcGoogle />
            Login com conta google
    </button>
  )
}

export default LoginBtn