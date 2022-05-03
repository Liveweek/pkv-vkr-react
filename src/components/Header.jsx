import React from 'react'
import { Link } from 'react-router-dom'


import {
    Box,
    Flex,
    Text,
    Link as ChakraLink,
    Spacer,
    IconButton,
    Heading,
    Center,
} from '@chakra-ui/react'

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Icon
} from '@chakra-ui/react'

import { HamburgerIcon, InfoIcon,  } from '@chakra-ui/icons'
import {AiOutlineUser} from 'react-icons/ai'


const Header = ({moduleName, ...props}) => {
    return (
        <div>
            <Flex mx='20px' mt='20px'>
                <Center>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='Menu'
                            icon={<HamburgerIcon/>}
                            variant='outline'
                            size='lg'
                        />
                        <MenuList>
                            <MenuItem>Товары магазина</MenuItem>
                            <MenuItem>Проекты закупок</MenuItem>
                            <MenuItem>История поставок</MenuItem>
                            <MenuItem>Новые товары</MenuItem>
                            <MenuItem>Расчёты прогнозов</MenuItem>
                            <MenuItem>Регламент системы</MenuItem>
                        </MenuList>
                    </Menu>
                    <Heading as='h1' size='2xl' ml='20px' color="blue.800">{moduleName}</Heading>
                    <InfoIcon ml='15px' color="blue.800"/>
                </Center>
                <Spacer/>
                <Center>
                    <Text mr='20px'>Здраствуте, Павел!</Text>
                    <Menu align='right'>
                        <MenuButton
                            as={IconButton}
                            aria-label='Login'
                            icon={<Icon as={AiOutlineUser}/>}
                            variant='outline'
                            size='lg'
                        />
                        <MenuList>
                            <MenuItem>Личная страница</MenuItem>
                            <MenuItem>Настройки</MenuItem>
                            <MenuItem>Выйти</MenuItem>
                        </MenuList>
                    </Menu>
                </Center>
            </Flex>
        </div>
    )
}

export default Header
