import { AuthView } from '@clerk/expo/native'
import { useAuth } from '@clerk/expo'
import { useRouter } from 'expo-router'
import { useEffect } from 'react'
import useSocialAuth from '@/hooks/useSocialAuth'

export default function SignInScreen() {
 const { handleSocialAuth, loadingStrategy } = useSocialAuth() 


  return <AuthView mode="signInOrUp" />
}
