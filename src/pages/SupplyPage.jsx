import React from 'react'

import { 
    Heading,
    Flex,
    Box,
    Center,
    IconButton,
    Text
} from "@chakra-ui/react"

import Header from '../components/Header'

import {FiMoreHorizontal} from "react-icons/fi"
import TableDictionary from '../components/TableDictionary'

function SupplyPage() {
  return (
    <div>
        <Header moduleName={"История поставок"}/>
        <Flex mx="80px" mt="32px">
            <Center>
                <Heading as='h2' size='lg' color="blue.800">Проект закупки товаров 16/02/2022</Heading>
                <IconButton 
                aria-label='More Options' 
                icon={<FiMoreHorizontal/>} 
                variant="ghost" 
                color="blue.800"
                />
            </Center>
        </Flex>
        <Box mt="32px" mx="80px">
            <Text size="lg"><b>Магазин поставки:</b> Москва, ул. Новый Арбат</Text>
            <Text size="lg" mt="10px"><b>Откуда:</b> Склад поставщика 1</Text>
            <Text size="lg" mt="10px"><b>Кол-во товаров в рамках поставки:</b> 52</Text>
        </Box>

        <Heading size="sm" color="blue.800" mt="42px" mx="80px">
            Список поставленных товаров
        </Heading>

        <Box
            mt="10px"
            mx="80px"
            bgColor="white"
            borderRadius="xl"
            border="2px"
            borderColor="gray.300"
            pt="7px"        
            boxShadow="lg"
        >
            <TableDictionary
                headerNames={['Название товара', 'Кол-во']}
                data={[
                    ['Товар 1', 10],
                    ['Товар 2', 12],
                    ['Товар 3', 12],
                    ['Товар 4', 12],
                    ['Товар 5', 12],
                    ['Товар 6', 12],
                    ['Товар 7', 12],
                    ['Товар 8', 12],
                    ['Товар 9', 12],
                    ['Товар 10', 12],
                    ['Товар 11', 12],
                    ['Товар 12', 12],
                    ['Товар 13', 12],
                    ['Товар 14', 12],
                    ['Товар 15', 12],
                    ['Товар 16', 12],
                    ['Товар 17', 12],
                    ['Товар 18', 12],
                    ['Товар 19', 12],
                ]}
            />
        </Box>
    </div>
  )
}

export default SupplyPage