import { Heading, Center, Box, VStack, FormControl, FormLabel, Input, Button } from '@chakra-ui/react'
import React from 'react'

function LoginPage() {
  return (
    <div style={{height:"100%"}}>
        <Center height="100%">
            <VStack>

                <Heading size="lg" color="blue.800">Аналитический модуль закупок</Heading>
                <Box
                    width="80%"
                    bgColor="white"
                    borderRadius="xl"
                    border="2px"
                    borderColor="gray.200"
                    boxShadow="lg"
                    p="20px"
                >
                    <Center>
                        <Heading>Вход</Heading>
                    </Center>
                    <FormControl mt="20px">
                        <FormLabel>Логин</FormLabel>
                        <Input type="text" placeholder="Введите логин"/>
                    </FormControl>
                    <FormControl mt="20px">
                        <FormLabel>Пароль</FormLabel>
                        <Input type="password" placeholder="Введите пароль"/>
                    </FormControl>
                    <Button variant="solid" colorScheme="blue" width="100%" mt="20px">Войти</Button>
                </Box>
            </VStack>
        </Center>
    </div>
  )
}

export default LoginPage