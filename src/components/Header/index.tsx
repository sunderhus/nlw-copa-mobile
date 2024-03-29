import ButtonIcon from '@/components/ButtonIcon'
import { AntDesign, Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Box, HStack, Text } from 'native-base'

interface Props {
  title: string
  showBackButton?: boolean
  showShareButton?: boolean
}

const Header: React.FC<Props> = ({
  title,
  showBackButton = false,
  showShareButton = false
}) => {
  const EmptyBoxSpace = (): React.ReactElement => (<Box w={6} h={6} />)
  const { goBack } = useNavigation()

  return (
    <HStack w="full" h={24} bgColor="gray.800" alignItems="flex-end" pb={5} px={5}>
      <HStack w="full" alignItems="center" justifyContent="space-between">
        {
          showBackButton
            ? <ButtonIcon as={Feather} name="chevron-left" onPress={() => { goBack() }}/>
            : <EmptyBoxSpace />
        }

        <Text color="white" fontFamily="medium" fontSize="md" textAlign="center">
          {title}
        </Text>

        {
          showShareButton
            ? <ButtonIcon as={AntDesign} name='export' />
            : <EmptyBoxSpace />
        }
      </HStack>
    </HStack>
  )
}

export default Header
