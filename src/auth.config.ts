import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  session: {
    maxAge: 5 * 1 * 1 * 60, // 5 min
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      console.log('authorized');
    
      return true;
    },
  },

  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;