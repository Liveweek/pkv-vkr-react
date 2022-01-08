import React from 'react'
import { Link } from 'react-router-dom'


import { Box,
         Flex,
         Text,
         Link as ChakraLink,
         Spacer
        } from '@chakra-ui/react'


const Header = () => {
    return (
        <div>
          <Box bg="#004bbd" py="20px">
            <Flex align="center" justify="left">
                <Box px="25px">
                    <ChakraLink fontSize='2xl' color="#ccfbff"> 
                        <Link to="/">Home</Link> 
                    </ChakraLink>
                </Box>
                <Spacer/>
                <Box px="25px" bg = "white" py="7px" mx={5} borderRadius="lg">
                    <ChakraLink fontSize='2xl' color="##0b005c">
                        <Link to="/login">Login</Link>
                    </ChakraLink>
                </Box>
            </Flex>
          </Box>
        </div>
    )
}

export default Header
