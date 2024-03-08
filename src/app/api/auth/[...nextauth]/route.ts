import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
      pages: {
        signIn: "/login",
      },
      providers: [
        CredentialsProvider({
          name: 'Entrar',
          credentials: {
            email: { label: "Email", type: "email", placeholder: "exemplo@email.com" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            const user = {
              id: "1",
              email: "admin@email.com", 
              password: "123",
              name: "Andre admin",
              role: "admin"
            }
            const isValidEmail = user.email === credentials?.email
            const isValidPassword = user.password === credentials?.password
            if(!isValidEmail || !isValidPassword){
              return null
            }
            return user
          }
        }),
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID!, // !quando tenho certeza q n é vazio, ?? "" callback caso esteja vazio
          clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
        GitHubProvider({
          clientId: process.env.GITHUB_ID!,
          clientSecret: process.env.GITHUB_SECRET!
        })
      ]
})

export { handler as GET, handler as POST }

/* 
Rotas criadas automaticamente
http://localhost:3000/api/auth/signin
http://localhost:3000/api/auth/providers

https://next-auth.js.org/providers/google  >>> ir no link em configuration > criar projeto > create credentials
escolher opcao Oauth client ID (web aplication)
Authorized javascript origins: url do projeto http://localhost:3000 ou url de producao
Authorized redirect URLs: procurar no link do provedor, subtitulo configuration
criar e pegar os dados abaixo
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=  openssl rand -base64 32

gitgub Settings/Developer Settings>Authorization callback URL = http://localhost:3000/api/auth/callback/github
*/