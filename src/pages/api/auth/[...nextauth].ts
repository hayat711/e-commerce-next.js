import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import {PrismaAdapter} from '@next-auth/prisma-adapter'
import {getEnv} from "@/utils/env";
import prisma from '@/lib/prismadb';


export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: getEnv('GITHUB_ID'),
            clientSecret: getEnv('GITHUB_SECRET'),
        }),
        // ...add more providers here

        GoogleProvider({
            clientId: getEnv('GOOGLE_CLIENT_ID'),
            clientSecret: getEnv('GOOGLE_SECRET'),
        }),
    ],
    secret: getEnv('JWT_SECRET'),

    pages: {
        signIn: 'auth/signin',
    },
    adapter: PrismaAdapter(prisma),

}

export default NextAuth(authOptions)