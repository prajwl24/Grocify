import { useClerk, useUser } from '@clerk/expo'
import { UserButton } from '@clerk/expo/native'
import { Link } from 'expo-router'
import { Pressable, Text, View } from 'react-native'

export default function Page() {
  const { user } = useUser()
  const { signOut } = useClerk()

  return (
    <View >
            <Text>Welcome!</Text>
      {!user ? (
        <>
          <Link href="/(auth)/sign-in">
            <Text>Sign in</Text>
          </Link>
          <Link href="/(auth)/sign-up">
            <Text>Sign up</Text>
          </Link>
        </>
      ) : (
        <>
          <Text>Hello {user.emailAddresses[0].emailAddress}</Text>
          <Pressable onPress={() => signOut()}>
            <Text>Sign out</Text>
          </Pressable>
          <View>
            <UserButton />
          </View>
        </>
      )}
    </View>
  )
}
