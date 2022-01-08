import React from 'react'


import { FormControl, FormLabel, Input, VStack, Heading, Button } from '@chakra-ui/react'


const LoginPage = () => {
    return (
        <div>
            <VStack spacing={4}>
                <Heading>Login Form</Heading>
                <FormControl isRequired>
                    <FormLabel htmlFor="username">
                        Username
                    </FormLabel>
                    <Input id="username" placeholder="Enter Username" />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel htmlFor="password">
                        Password
                    </FormLabel>
                    <Input pr='4.5rem' type="password" placeholder="Enter Password"/>
                </FormControl>
                <Button
                    type="submit"
                    width="full"
                    variant="solid"
                    colorScheme="blue"
                >
                    Login
                </Button>
            </VStack>
        </div>
    )
}

export default LoginPage
