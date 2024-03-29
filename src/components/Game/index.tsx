import { Button, HStack, Text, useTheme, VStack, Icon } from 'native-base'
import { AntDesign } from '@expo/vector-icons'
import { getName } from 'country-list'

import Team from '@/components/Team'

interface GuessProps {
  id: string
  gameId: string
  createdAt: string
  participantId: string
  firstTeamPoints: number
  secondTeamPoints: number
}

export interface GameProps {
  id: string
  firstTeamCountryCode: string
  secondTeamCountryCode: string
  guess: null | GuessProps
}

interface Props {
  data: GameProps
  onGuessConfirm: () => void
  setFirstTeamPoints: (value: string) => void
  setSecondTeamPoints: (value: string) => void
}

const Game: React.FC<Props> = ({
  data,
  setFirstTeamPoints,
  setSecondTeamPoints,
  onGuessConfirm
}) => {
  const { colors, sizes } = useTheme()

  return (
    <VStack
      w="full"
      bgColor="gray.800"
      rounded="sm"
      alignItems="center"
      borderBottomWidth={3}
      borderBottomColor="yellow.500"
      mb={3}
      p={4}
    >
      <Text color="gray.100" fontFamily="heading" fontSize="sm">
        {getName(data.firstTeamCountryCode)} vs. {getName(data.secondTeamCountryCode)}
      </Text>

      <Text color="gray.200" fontSize="xs">
        22 de Novembro de 2022 às 16:00h
      </Text>

      <HStack mt={4} w="full" justifyContent="space-between" alignItems="center">
        <Team
          code={data.firstTeamCountryCode}
          position="right"
          onChangeText={setFirstTeamPoints}
        />

        <Icon as={AntDesign} name="close" color={colors.gray[300]} size={sizes[6]} />

        <Team
          code={data.secondTeamCountryCode}
          position="left"
          onChangeText={setSecondTeamPoints}
        />
      </HStack>

      {
        !data.guess &&
        <Button
          size="xs"
          w="full"
          bgColor="green.500"
          mt={4}
          onPress={onGuessConfirm}
        >
          <HStack alignItems="center">
            <Text color="white" fontSize="xs" fontFamily="heading" mr={3}>
              CONFIRMAR PALPITE
            </Text>

            <Icon
              as={AntDesign}
              name="check"
              color={colors.white}
              size={sizes[4]}
            />
          </HStack>
        </Button>
      }
    </VStack>
  )
}

export default Game
