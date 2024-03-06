'use client'
import { signOut } from 'next-auth/react'
import React from 'react'

const LogoutBtn = () => {
  return (
    <button 
        className="border border-neutral-900 p-2 rounded-md"
        onClick={()=>signOut()}
    >           
            Logout
    </button>
  )
}

export default LogoutBtn