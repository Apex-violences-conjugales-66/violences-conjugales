import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { authConfig } from "@/auth.config";

export const { signIn, signOut, auth, handlers } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email as string;
        const password = credentials?.password as string;

        if (email !== process.env.ADMIN_EMAIL) return null;
        const hashedAdminPassword = process.env.ADMIN_PASSWORD_HASH_BASE64;
        if (!hashedAdminPassword)
          throw new Error("Admin password hash is not set");
        const hashedPassword = Buffer.from(
          hashedAdminPassword,
          "base64",
        ).toString("utf-8");
        const passwordsMatch = await bcrypt.compare(password, hashedPassword);
        if (!passwordsMatch) return null;
        return { id: "1", email };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});
