import { title } from "process"
import LoginGithubBtn from "./LoginGithubBtn"
import LoginGoogleBtn from "./LoginGoogleBtn"
import LoginForm from "./LoginForm"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

const Login = async () => {
  const session = await getServerSession()
    if(session) {
        return redirect("/profile")
    }
  return (
    <div className="flex items-center justify-center">
        <div className="gap-4 flex flex-col items-center justify-center bg-white px-4 py-8 w-fit rounded-md">
          <LoginForm/>
          <LoginGoogleBtn/>
          <LoginGithubBtn/>
        </div>

    </div>
  )
}

export default Login