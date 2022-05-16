import { AddIcon, CalendarIcon, CloseIcon, SearchIcon, SettingsIcon } from '@chakra-ui/icons'
import { Box, Heading, IconButton, Center, Input, Flex, FormControl, FormLabel, InputGroup, InputLeftElement, Select, Button } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import Header from '../components/Header'
import TableActions from '../components/TableActions'

function NewItemList() {
  return (
    <div>
        <Header moduleName={"Новые товары"}/>

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
                                <FormLabel>Дата создания товара</FormLabel>
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
                            Создать новый товар
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
                   "Название товара",
                   "Дата создания",
                   "Автор",
                   "Дата последнего изменения" 
                ]}
                data={[["Новый товар 1", "16/02/2022", "Конаков Павел (Вы)", "17/02/2022"]]}
                actions={[
                    <IconButton variant="ghost" icon={<CalendarIcon/>} color="blue.200"/>,
                    <IconButton mr="5px" variant="ghost" icon={<AiOutlineEdit/>} color="green.200"/>,
                    <IconButton mr="5px" variant="ghost" icon={<CloseIcon/>} color="red.200"/>
                ]}
            />
        </Box>
    </div>
  )
}

export default NewItemList