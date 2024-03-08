'use client'

import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"

const LoginForm = () => {
    const searchParams = useSearchParams()
    const error = searchParams.get("error")

    async function login(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data = {
            email: formData.get("email"),
            password: formData.get("password")
        }
        signIn("credentials", {
            ...data,
            callbackUrl: "/profile"
        })
    }

    return (
        <form onSubmit={login} className="flex flex-col">
                <h2 className="text-center text-2xl font-bold mb-2">Login</h2>
                <input 
                name="email"
                type="email" 
                placeholder="exemplo@email.com" 
                className="h-12 text-xl outline-teal-200 bg-purple-200 text-purple-700 px-4 mb-4"
                />
                <input 
                name="password"
                type="password" 
                placeholder="senha" 
                className="h-12 text-xl outline-teal-200 bg-purple-200 text-purple-700 px-4 mb-4"
                />
                {error == "CredentialsSignin" &&
                    <div className="h-12 text-xl text-center text-red-500 px-4 mb-4">Email ou senha invalido</div>
                }
                <button 
                    className="text-xl text-center border border-neutral-900 p-2 rounded-md"
                    type="submit"
                >            
                        Entrar
                </button>
            </form>
    )
}

export default LoginForm