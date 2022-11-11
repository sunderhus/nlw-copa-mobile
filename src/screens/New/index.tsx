import Logo from '@/assets/logo.svg';
import { Button, Header, Input } from '@/components';
import { Heading, VStack,Text } from 'native-base';
import React from 'react';


const New: React.FC = () => {
  return (
    <VStack flex="1" bgColor="gray.900">
        <Header title='Criar novo bolão'/>

        <VStack mt={8} mx={5} alignItems="center">
            <Logo/>

            <Heading fontSize={"xl"} color={"white"} my={8} textAlign="center" >
                Crie seu primeiro bolão da copa {"\n"} e compartilhe entre amigos!
            </Heading>

            <Input
              mb={2}
              placeholder="Qual nome do seu bolão"
            />

            <Button
              title="Criar meu bolão"
            />

            <Text
              color="gray.200"
              fontSize="md"
              textAlign="center"
              px={2}
              mt={4}
            >
              Após criar seu bolão, você reberá um código único{"\n"}
              que poderá usar para convidar outras pessoas.
            </Text>
        </VStack>
    </VStack>
  );

}

export default New;