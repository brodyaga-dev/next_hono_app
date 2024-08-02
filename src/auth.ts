import NextAuth from 'next-auth';

import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { User } from '@/libs/definitions';
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const { auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  ...authConfig,

  providers: [
    Credentials({
      async authorize(credentials) {

        if (!credentials.email || !credentials.password) {
          throw new Error('Please enter an email and password')
        }

        // check to see if user exists
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email as string
          }
        });

        // if no user was found 
        if (!user || !user?.password) {
          throw new Error('No user found')
        }

        // if password does not match
        if (credentials.password !== user.password) {
          throw new Error('Incorrect password')
        }

        if (credentials.email && credentials.password) {
          // Successful log in
          const usr = {
            id: user?.id ?? '',
            name: user?.name ?? '',
            email: user?.email ?? '',
            gender: user?.gender ?? '',
            createdAt: user?.createdAt ?? ''
          } as User;
          return usr;
        }
        return null;
      },
    })
  ],
  callbacks: {
    async session({ session, token }) {
      if (token.user) {
        session.user = {
          ...token.user,
          emailVerified: null
        } as User & { emailVerified: null };
      }
      return session;
    },
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
});