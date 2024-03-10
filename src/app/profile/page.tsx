import { getServerSession } from "next-auth"
import Image from "next/image"
import { redirect } from "next/navigation"
import LogoutBtn from "../login/LogoutBtn"

const Profile = async () => {
    const session = await getServerSession()
    console.log(session)
    if(!session) {
        return redirect("/login")
    }
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-xl">
        <h1><b>Usuário: </b> {session.user?.name}</h1>
        <h2><b>e-mail: </b>{session.user?.email}</h2>
        <div>
            {session.user?.image &&
                <Image 
                    src={session.user?.image} 
                    alt="imagem usuario" 
                    width={50} 
                    height={50}
                    className="rounded-full"
                />
            }
        </div>
        <LogoutBtn/>
        {/* <pre className="bg-black text-white p-4">{JSON.stringify(session, null, 2)}</pre> */}
    </div>
  )
}

export default Profile