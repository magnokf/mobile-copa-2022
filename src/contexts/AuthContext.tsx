import React, { createContext, ReactNode, useEffect, useState } from 'react'
import * as AuthSession from 'expo-auth-session'
import * as Google from 'expo-auth-session/providers/google'
import * as WebBrowser from 'expo-web-browser'

WebBrowser.maybeCompleteAuthSession()

interface UserProps {
	name: string
	avatarUrl: string
}

export interface AuthContextDataProps {
	user: UserProps
	isUserLoading: boolean
	signIn: () => Promise<void>
}

interface AuthProviderProps {
	children: ReactNode
	
}
export const AuthContext = createContext({} as AuthContextDataProps)

export function AuthContextProvider({ children }: AuthProviderProps) {
	const [ user, setUser ] = useState<UserProps>({} as UserProps)
	const [ isUserLoading, setIsUserLoading ] = useState(false)
	const [ request, response, promptAsync ] = Google.useAuthRequest({
		clientId: '191878231657-86mu8h8nm7rj0v55gg8nsb6svamhq79p.apps.googleusercontent.com',
		redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
		scopes: [ 'profile', 'email' ]
	})
	
	async function signIn() {
		try {
			setIsUserLoading(true)
			await promptAsync()
		}
		catch (error) {
			console.log(error)
			throw error
		}
		finally {
			setIsUserLoading(false)
		}
	}
	
	async function signInWithGoogle(access_token: string) {
		//buscar as informações do usuário no backend com o token
		console.log('TOKEN DE AUTENTICAÇÃO: ', access_token)
		
	}
	
	useEffect(() =>{
		if (response?.type === 'success' && response.authentication?.accessToken) {
			// const { access_token } = response.params
			// token para testar a autenticação na api backend server
			signInWithGoogle(response.authentication.accessToken)
		}
	}, [response])
	
	return (
		<AuthContext.Provider value={{
			signIn,
			isUserLoading,
			user
			
			
		}}>
			{children}
		
		</AuthContext.Provider>)
}