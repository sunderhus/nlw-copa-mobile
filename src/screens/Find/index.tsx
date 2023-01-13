import { Button, Header, Input } from '@/components';
import { Heading, VStack } from 'native-base';
import React from 'react';

const Find: React.FC = () => {
  return (
    <VStack flex="1" bgColor="gray.900">
        <Header title='Buscar por código'/>

        <VStack mt={8} mx={5} alignItems="center">
            <Heading fontSize={"xl"} color={"white"} mb={8} textAlign="center" >
                Encontre um bolão através de {"\n"} seu código único
            </Heading>

            <Input
              mb={2}
              placeholder="Qual o código do bolão"
            />

            <Button
              title="Buscar bolão"
            />
        </VStack>
    </VStack>
  );

}

export default Find;