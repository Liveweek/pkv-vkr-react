import React from 'react'
import Header from '../components/Header'


import {
    Box,
    Flex,
    Center,
    FormControl,
    FormLabel,
    Select,
    Button,
    Input,
    InputGroup,
    InputLeftElement,
    IconButton,
    Heading
} from "@chakra-ui/react"

import {SearchIcon, SettingsIcon, AddIcon, ArrowForwardIcon} from "@chakra-ui/icons"
import TableActions from '../components/TableActions'

function FcstList() {
  return (
    <div>
        <Header moduleName={"Расчёты прогнозов"}/>

        <Box
            mx="20px"
            bgColor="white"
            borderRadius="xl"
            border="2px"
            borderColor="gray.200"
            boxShadow="lg"
        >
            <Flex mx="20px" my="25px">
                <Center width="75%">
                    <Flex flexDirection="column" width="100%">
                        <Flex>
                            <FormControl>
                                <FormLabel>Дата расчёта</FormLabel>
                                <Input bgColor="white" type="date" id="create_date"/>
                            </FormControl>
                            <FormControl ml="15px">
                                <FormLabel>Автор</FormLabel>
                                <Select bgColor="white" placeholder="Текущий пользователь">
                                </Select>
                            </FormControl>
                        </Flex>
                        <Center mt="10px">
                            <FormControl>
                                <FormLabel>Поиск</FormLabel>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none" 
                                        children={<SearchIcon color="gray.300"/>}
                                    />
                                    <Input bgColor="white" placeholder="Введите название товара"/>
                                </InputGroup>
                            </FormControl>
                        </Center>
                    </Flex>
                </Center>
                <Center width="25%" ml="20px">
                    <Flex flexDirection="column" width="100%" height="100%">
                        <Button variant="solid"  height="100%" colorScheme="green" leftIcon={<AddIcon/>}>
                            Новый расчёт
                        </Button>
                        <Center height="100%" mt="15px">
                            <Button 
                                variant="solid" 
                                colorScheme="blue" 
                                width="100%" 
                                height="100%"
                                leftIcon={<SettingsIcon/>}
                            >
                                Сортировка
                            </Button>
                            <Button 
                                ml="15px" 
                                variant="solid" 
                                colorScheme="teal" 
                                width="100%" 
                                height="100%"
                                leftIcon={<SearchIcon/>}
                            >
                                Поиск
                            </Button>
                        </Center>
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
            boxShadow="lg"
        >
            <TableActions
                headerNames={[
                    "Дата и время запуска",
                    "Новый товар",
                    "Пользователь запуска",
                    "Дата начала прогноза",
                    "Дата конца прогноза"
                ]}
                data={[
                    ["10/02/2022 10:38:22", "Новый товар 1", "Конаков Павел (Вы)", "01/02/2022","28/02/2022"]
                ]}
                actions={[
                    <IconButton variant="ghost" icon={<ArrowForwardIcon/>} color="blue.200"/>
                ]} 
            />
        </Box>
    </div>
  )
}

export default FcstList