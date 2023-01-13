import { Image, IImageProps } from 'native-base'

const Flag: React.FC = ({ ...rest }: IImageProps) => {
  return (
    <Image
      {...rest}
      alt="flag"
      w={8}
      h={6}
      mx={3}
    />
  )
}

export default Flag
