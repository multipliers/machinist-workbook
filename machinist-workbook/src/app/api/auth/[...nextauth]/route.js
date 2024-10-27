// app/api/auth/[...nextauth]/route.js
import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '../../../../../lib/mongodb';

export const authOptions = {
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth/signin',
    verifyRequest: '/auth/verify-request',
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return '/dashboard'; //baseUrl; // Standardmäßig zur Startseite
    },    
    //async signIn({ email }) {
    //  const allowedDomain = 'example.com'; // Ersetzen Sie dies durch Ihre Firmen-Domain
    //  if (email.endsWith(`@${allowedDomain}`)) {
    //    return true;
    //  } else {
    //   return '/auth/error'; // Optional: Weiterleitung zu einer Fehlerseite
    //  }
    //},
  },

    // Aktivieren des Debuggings
  debug: true,
  
    // Weitere Optionen können hier hinzugefügt werden
    // z.B. callbacks, session, etc.
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
