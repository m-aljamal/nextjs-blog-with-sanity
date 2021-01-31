import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import Adapters from "next-auth/adapters";

import Models from "../../../models";

export default (req, res) =>
  NextAuth(req, res, {
    session: {
      jwt: true,
      maxAge: 30 * 24 * 60 * 60,
    },
    jwt: {
      secret: process.env.JWT_SECRET,
    },
    providers: [
      Providers.GitHub({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_GITHUB_SECRET,
      }),
      Providers.Google({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    ],
    adapter: Adapters.TypeORM.Adapter(
      process.env.DATABASE_URL,

      {
        models: {
          User: Models.User,
        },
      }
    ),

    pages: {
      signIn: "/signin",
    },
    callbacks: {
      session: async (session, user) => {
        console.log("***** session");
        console.log({ session, user });

        session.user.id = user.id;
        session.user.isAdmin = user.isAdmin;
        return session;
      },
      async jwt(tokenPayload, user, account, profile, isNewUser) {
        console.log("****** jwt");
        console.log({ tokenPayload, user, account, profile, isNewUser });

        if (tokenPayload && user) {
          return {
            ...tokenPayload,
            id: `${user.id}`,
            isAdmin: `${user.isAdmin}`,
          };
        }
        return tokenPayload;
      },
    },
  });
