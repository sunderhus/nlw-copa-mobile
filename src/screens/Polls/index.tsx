import { Button, Header } from '@/components'
import { Icon, VStack } from 'native-base'
import { Octicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const Polls: React.FC = () => {
  const { navigate } = useNavigation()

  return (
        <VStack
            flex={1}
            bgColor="gray.900"
        >
            <Header
                title="Meus Bolões"
                showBackButton
            />

            <VStack
                mt={6}
                mx={5}
                borderBottomWidth={1}
                borderBottomColor="gray.600"
                pb={4}
                mb={4}
            >
                <Button
                leftIcon={
                <Icon
                    as={Octicons}
                    name="search"
                    color="black"
                    size="md"
                />}
                title="Buscar bolão por código"
                onPress={() => { navigate('find') }}
                />
            </VStack>
        </VStack>
  )
}

export default Polls
