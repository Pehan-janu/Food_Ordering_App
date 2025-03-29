import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth from "next-auth"

const handler = NextAuth({
  secret: process.env.SECERET,
  providers: [
    CredentialsProvider({

      name: 'Credentials',
      id: 'credentials',
      
      credentials: {
        username: { label: "Email", type: "email", placeholder: "test@gmail.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        console.log({credentials});
      
        return null
      }
    })
  ]

})

export {handler as GET , handler as POST}