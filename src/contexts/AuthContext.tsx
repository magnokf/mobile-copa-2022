import React, { createContext } from 'react'

interface UserProps {
	name: string
	avatarUrl: string
}

export interface AuthContextDataProps {
	user: UserProps
	signInWithGoogle: () => Promise<void>
}

interface AuthProviderProps {
	children: React.ReactNode
}

export const AuthContext = createContext({} as AuthContextDataProps)

export function AuthContextProvider({ children }: AuthProviderProps) {
	async function signInWithGoogle() {
	console.log('signInWithGoogle')
	}
	
	return (
		<AuthContext.Provider value={{
			signInWithGoogle,
			user: {
				name: 'John Doe',
				avatarUrl: 'https://github.com/rodrigorgtic.png'
			}
			
			
		}}>
			{children}
		
		</AuthContext.Provider>)
}