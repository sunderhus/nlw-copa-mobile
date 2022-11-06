
import {Center,Icon,Text} from 'native-base'
import {Button, Loading} from '@/components'
import Logo  from '@/assets/logo.svg'
import {Fontisto} from '@expo/vector-icons'

const SignIn: React.FC = () => {
  return (
    <Center flex={1} paddingX={4} bgColor="gray.900" >
      <Logo width={212} height={40}/>

      <Button
        type='SECONDARY'
        title='Entrar com Google'
        leftIcon={
          <Icon 
            as={Fontisto}
            name='google'
            color='white'
            size='md'
          />
        }
        mt={12}
      />
      <Text color='white' textAlign='center' mt={4}>
        Não utilizamos nenhuma informação além {'\n'}
        do seu e-mail para criação de sua conta.
      </Text>
    </Center>
  );
}

export default SignIn;