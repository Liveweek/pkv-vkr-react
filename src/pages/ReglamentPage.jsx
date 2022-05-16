import React from 'react'

import {
    Box,
    Flex,
    Button,
    Heading,
    Center
} from "@chakra-ui/react"

import {CheckIcon, SearchIcon} from "@chakra-ui/icons"

import Header from '../components/Header'
import TableDictionary from '../components/TableDictionary'

function ReglamentPage() {
  return (
    <div>
        <Header moduleName={"Регламент системы"}/>
        <Flex mt="20px" mx="80px">
            <Center>
                <Heading size="lg" color="blue.800">Регламенты выгрузки чеков</Heading>
            </Center>
            <Button ml="15px" variant="ghost" leftIcon={<CheckIcon/>} size="lg">Запуск</Button>
        </Flex>
        <Box
            mt="10px"
            mx="80px"
            bgColor="white"
            height="400px"
            overflowY="auto"
            borderRadius="xl"
            border="2px"
            borderColor="gray.300"      
            boxShadow="lg"
        >
            <TableDictionary
                headerNames={['ID', 'Дата выгрузки', 'Строк выгружено', 'Строк добавлено']}
                data={[
                    [22, "22/02/2022", 123451, 22423],
                    [23, "23/02/2022", 123451, 22423],
                    [24, "24/02/2022", 123451, 22423],
                    [25, "25/02/2022", 123451, 22423],
                    [25, "25/02/2022", 123451, 22423],
                    [25, "25/02/2022", 123451, 22423],
                    [25, "25/02/2022", 123451, 22423],
                    [25, "25/02/2022", 123451, 22423],
                    [25, "25/02/2022", 123451, 22423],
                    [25, "25/02/2022", 123451, 22423],
                    [25, "25/02/2022", 123451, 22423],
                    [25, "25/02/2022", 123451, 22423],
                    [25, "25/02/2022", 123451, 22423],
                    [26, "26/02/2022", 123451, 22423]
                ]}
            />
        </Box>

        <Flex mt="20px" mx="80px">
            <Center>
                <Heading size="lg" color="blue.800">Расчёт фактического спроса</Heading>
            </Center>
            <Button ml="15px" variant="ghost" leftIcon={<CheckIcon/>} size="lg">Запуск</Button>
        </Flex>

        <Flex mt="20px" mx="80px">
            <Button width="20%" variant="solid" colorScheme="blue" leftIcon={<SearchIcon/>} size="lg">Найти конкретный товар</Button>
            <Box
                bgColor="white"
                border="2px"
                borderColor="gray.300"
                height="400px"
                overflowY="auto"
                borderRadius="xl"
                width="80%"
                ml="30px"
                boxShadow="lg"
            >
                <TableDictionary
                    headerNames={['ID', 'Дата-вермя расчёта', 'Товар', 'Магазин', 'Месяц прогноза']}
                    data={[
                        [22, "28/02/2022 22:22:22", "Товар 1", "Москва", "Декабрь"],
                        [22, "28/02/2022 22:22:22", "Товар 1", "Москва", "Декабрь"],
                        [22, "28/02/2022 22:22:22", "Товар 1", "Москва", "Декабрь"],
                        [22, "28/02/2022 22:22:22", "Товар 1", "Москва", "Декабрь"],
                        [22, "28/02/2022 22:22:22", "Товар 1", "Москва", "Декабрь"],
                        [22, "28/02/2022 22:22:22", "Товар 1", "Москва", "Декабрь"],
                        [22, "28/02/2022 22:22:22", "Товар 1", "Москва", "Декабрь"]
                    ]}
                />
            </Box>
        </Flex> 
    </div>
  )
}

export default ReglamentPage