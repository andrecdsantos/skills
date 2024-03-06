import LoginBtn from "@/app/login/LoginBtn"
import LogoutBtn from "@/app/login/LogoutBtn"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"


const UserAuthSection = async () => {
    const session = await getServerSession()
  return (
    <section className="flex">
        {!session ? <LoginBtn/> : 
        <>
            <LogoutBtn/>
            <button 
                className="flex gap-2 items-center border border-neutral-900 p-2 rounded-md"
                onClick={redirect("/profile")}
            > 
            Perfil
    </button>
        </>
        }
    </section>
  )
}

export default UserAuthSection