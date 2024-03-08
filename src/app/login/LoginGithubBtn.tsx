'use client'
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa6";

const LoginGithubBtn = () => {
  return (
    <button 
        className="flex gap-2 items-center border border-neutral-900 p-2 rounded-md"
        onClick={()=>signIn('github', {callbackUrl: '/profile'} )}
    >            
            <FaGithub />
            Login com conta github
    </button>
  )
}

export default LoginGithubBtn