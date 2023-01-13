import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { useTheme, Icon } from 'native-base'

type VectorIconsFamily = unknown

interface Props extends TouchableOpacityProps {
  name: string
  as: VectorIconsFamily
}

const ButtonIcon: React.FC<Props> = ({ as, name, ...rest }) => {
  const { colors, sizes } = useTheme()

  return (
    <TouchableOpacity {...rest}>
      <Icon as={as} name={name} color={colors.gray[300]} size={sizes[1.5]} />
    </TouchableOpacity>
  )
}

export default ButtonIcon
