import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID!, // !quando tenho certeza q n é vazio, ?? "" callback caso esteja vazio
          clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
      ]
})

export { handler as GET, handler as POST }

/* 
https://next-auth.js.org/providers/google  >>> ir no link em configuration > criar projeto > create credentials
escolher opcao Oauth client ID (web aplication)
Authorized javascript origins: url do projeto http://localhost:3000 ou url de producao
Authorized redirect URLs: procurar no link do provedor, subtitulo configuration
criar e pegar os dados abaixo
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=  openssl rand -base64 32
*/