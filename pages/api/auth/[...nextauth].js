import User from "@/models/User";
import connectDb from "@/utils/connectDb";
import { verifyPassword } from "@/utils/functions";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

// Credentials Login
const authOption = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        try {
          await connectDb();
        } catch (err) {
          throw new Error("Server Error");
        }

        const { email, password } = credentials;
        if (!email || !password) {
          throw new Error("Invalid Data");
        }
        const user = await User.findOne({ email:email });
        if (!user) {
          throw new Error("Email Not Exist");
        }
        if (!(await verifyPassword(password, user.password))) {
          throw new Error("username or password is not correct");
        }
        return { name: user.name, email: user.email };
      },
    }),
  ],
};

export default NextAuth(authOption);
