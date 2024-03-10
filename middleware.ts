import { NextAuthMiddlewareOptions, NextRequestWithAuth, withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

const middleware = (request: NextRequestWithAuth) => {
    console.log('[MIDDLEWARE_NEXTAUTH_TOKEN]', request.nextauth.token)

    const isPrivateRoutes = request.nextUrl.pathname.startsWith("/profile")
    const isAdmin = request.nextauth.token?.role === 'admin' 

    if(isPrivateRoutes && !isAdmin) {
        return NextResponse.rewrite(new URL('/flip', request.url))/* se esta na pagina profile e a role do usuario nao é admin redireciona para a pagina flip */
    }
}

const callbackOptions: NextAuthMiddlewareOptions = {}

export default withAuth(middleware, callbackOptions)

export const config = {
    matcher: "/profile"
}