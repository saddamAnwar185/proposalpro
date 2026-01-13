import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

// Simple in-memory auth for MVP
// For production, connect to a real database
const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Email',
            credentials: {
                email: { label: 'Email', type: 'email', placeholder: 'your@email.com' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                // For MVP: Accept any email/password combination
                // In production, validate against a real database
                if (credentials?.email && credentials?.password) {
                    return {
                        id: '1',
                        email: credentials.email,
                        name: credentials.email.split('@')[0],
                    }
                }
                return null
            },
        }),
    ],
    pages: {
        signIn: '/auth/signin',
    },
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
            }
            return token
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id
            }
            return session
        },
    },
})

export { handler as GET, handler as POST }
