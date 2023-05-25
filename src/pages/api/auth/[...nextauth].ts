import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import axios from 'axios';

export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GITHUB_CLIENT_ID!,
			clientSecret: process.env.GITHUB_SECRET!,
		}),
		Credentials({
			id: 'credentials',
			name: 'Credentials',
			credentials: {
				email: {
					label: 'Email',
					type: 'text',
				},
				password: {
					label: 'Password',
					type: 'password',
				},
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials.password) {
					throw new Error('Email and password required');
				}

				const loginRoute = process.env.NEXT_PUBLIC_BACKEND_URI!;
				const res = await axios.post(`${loginRoute}/auth/login`, credentials);
				console.log(res);

				const { data } = res.data;

				return data;
			},
		}),
	],
	pages: {
		signIn: '/auth/login',
	},
	secret: process.env.JWT_SECRET,
});
