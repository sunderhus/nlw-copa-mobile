import { useContext, useState, useEffect } from 'react'
import { createContext, ReactNode } from 'react'
import * as AuthSession from 'expo-auth-session'
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import { isLoading } from 'expo-font'

WebBrowser.maybeCompleteAuthSession()

interface User {
  name: string
  avatarUrl: string

}

export interface AuthContextDataProps {
  user: User
  isLoading: boolean
  signIn: () => Promise<void>
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps)

interface AuthContextProviderProps {
  children: ReactNode
}

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({ avatarUrl: '', name: '' })
  const [loading, setLoading] = useState(false)

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: '214467113567-nvoa76ad36u7l4sos75h5de1bp4053kh.apps.googleusercontent.com',
    redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
    scopes: ['profile', 'email']
  })

  const signIn = async (): Promise<void> => {
    try {
      setLoading(true)
      await promptAsync()
    } catch (error) {
      setLoading(false)
      throw error
    } finally {
      setLoading(false)
    }
  }

  const signInWithGoogle = async ({ accessToken }: { accessToken: string }): Promise<void> => {
    console.log('TOKEN---->', accessToken)
  }

  useEffect(() => {
    const isSuccessLogin = response?.type === 'success' && response.authentication?.accessToken

    if (!isSuccessLogin) {
      return
    }

    void signInWithGoogle({
      accessToken: response.authentication.accessToken
    })
  }, [response])

  return (
    <AuthContext.Provider value={{
      signIn,
      isLoading: loading,
      user
    }} >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = (): AuthContextDataProps => {
  return useContext(AuthContext)
}

export {
  useAuth,
  AuthContextProvider
}
