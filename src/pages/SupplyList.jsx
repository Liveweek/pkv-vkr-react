import React from 'react'

import {
    Box,
    Flex,
    Center,
    FormControl,
    Button,
    FormLabel,
    Input,
    Select,
    Heading,
    IconButton
} from '@chakra-ui/react'

import {SearchIcon, SettingsIcon, AddIcon} from '@chakra-ui/icons'

import Header from '../components/Header'
import TableActions from '../components/TableActions'

function SupplyList() {
  return (
    <div>
        <Header moduleName={"История поставок"}/>
        <Box 
            mt="20px"
            bgColor="white"
            mx="20px"
            border="2px"
            borderColor="gray.200"
            borderRadius="xl"
            boxShadow="lg"
        >
            <Flex px="25px" py="20px">
                <Center width="100%">
                    <FormControl>
                        <FormLabel>Дата поставки (от)</FormLabel>
                        <Input id="create_date" type="date"/>
                    </FormControl>
                </Center>
                <Center width="100%" ml="13px">
                    <FormControl>
                        <FormLabel>Дата поставки (до)</FormLabel>
                        <Input id="create_date" type="date"/>
                    </FormControl>
                </Center>
                <Center width="100%" ml="13px">
                    <FormControl>
                        <FormLabel>Магазин поставки</FormLabel>
                        <Select bgColor="white" placeholder="г.Москва, ул. Новый Арбат, д. 3">
                        </Select>
                    </FormControl>
                </Center>
                <Center width="100%" ml="13px">
                    <Flex flexDirection="column" width="100%">
                        <Button variant="solid" colorScheme="purple" color="white" leftIcon={<SettingsIcon/>}>Создать новый проект</Button>
                        <Button mt="10px" width="100%" variant="solid" colorScheme="blue" leftIcon={<SearchIcon/>}>Сортировка</Button>
                    </Flex>
                </Center>
            </Flex>
        </Box>
        <Heading as="h2" size="xl" mx="20px" mt="20px" color="blue.800">Результат поиска: 1</Heading>
        <Box
            mx="20px"
            mt="15px"
            bgColor="white"
            border="2px"
            borderColor="gray.200"
            borderRadius="xl"
            pt="7px"
            boxShadow="lg"
        >
            <TableActions
                headerNames={[
                    "Дата поставки", 
                    "Магазин поставки",
                    "Откуда",
                    "Кол-во товаров"
                ]}
                data={
                    [
                        ["02/02/2022", "Москва, Новый Арбат, 22", "Склад поставщика 1", 52]
                    ]
                }
                actions={[
                    <IconButton mr="5px" variant="ghost" icon={<AddIcon/>} color="blue.200"/>,
                ]}
            />
        </Box>
    </div>
  )
}

export default SupplyList