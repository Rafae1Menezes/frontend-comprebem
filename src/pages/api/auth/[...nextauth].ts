import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const user = {
          id: "1",
          name: "Admin",
          email: "teste@gmail.com",
          password: "123456",
          role: "admin",
        };
        if (
          user &&
          user.email === credentials?.email &&
          user.password === credentials?.password
        ) {

          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }) {

      session.user.id = token.sub
      
      return session
    }
  }
}

export default NextAuth(authOptions);
