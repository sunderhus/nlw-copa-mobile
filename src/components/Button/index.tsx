import React from 'react';
import {
  Button as NativeBaseButton,
  IButtonProps,
  Text
} from 'native-base';

interface Props extends IButtonProps {
    title:string;
    type?:'PRIMARY'|'SECONDARY'
}

const Button: React.FC<Props> = ({title, type = 'PRIMARY', ...props}) => {
  return (
    <NativeBaseButton
      w="full"
      h={14}
      rounded="sm"
      fontSize="md"
      textTransform="uppercase"
      bg={
        type  === 'SECONDARY'?'red.500':'yellow.500'
      }
      _pressed={{
        bg: type === 'SECONDARY'? 'red.400':'yellow.600'
      }}
      {...props}
      >
        <Text
          fontSize="sm"
          fontFamily="heading"
          color={type==="SECONDARY" ?'white':'black'}
        >
            {title}
        </Text>
    </NativeBaseButton>
  );
}

export default Button;