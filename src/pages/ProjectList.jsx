import { AddIcon, SearchIcon, SettingsIcon, DownloadIcon, EditIcon, CloseIcon} from '@chakra-ui/icons'
import { Box, Button, Center, Flex, FormControl, FormLabel, Heading, Input, Select, IconButton } from '@chakra-ui/react'
import React from 'react'
import Header from '../components/Header'
import TableActions from '../components/TableActions'

function ProjectList() {
  return (
    <div>
        <Header moduleName={"Проекты закупок"}/>
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
                        <FormLabel>Дата создания проекта</FormLabel>
                        <Input id="create_date" type="date"/>
                    </FormControl>
                </Center>
                <Center width="100%" ml="13px">
                    <FormControl>
                        <FormLabel>Автор проекта</FormLabel>
                        <Select bgColor="white" placeholder="Текущий пользователь">
                        </Select>
                    </FormControl>
                </Center>
                <Center width="100%" ml="13px">
                    <FormControl>
                        <FormLabel>Дата создания проекта</FormLabel>
                        <Input id="create_date" type="date"/>
                    </FormControl>
                </Center>
                <Center width="100%" ml="13px">
                    <Flex flexDirection="column" width="100%">
                        <Button variant="solid" colorScheme="green" leftIcon={<AddIcon/>}>Создать новый проект</Button>
                        <Flex mt="15px" width="100%">
                            <Button width="100%" variant="solid" colorScheme="blue" leftIcon={<SettingsIcon/>}>Сортировка</Button>
                            <Button ml="15px" width="100%" variant="solid" colorScheme="cyan" leftIcon={<SearchIcon/>} color="white">Поиск</Button>
                        </Flex>
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
                    "Дата-время создания", 
                    "Дата планируемой поставки",
                    "Автор",
                    "Кол-во товаров", 
                    "Дата-время последнего изменения проекта"
                ]}
                data={
                    [
                        ["15/01/2022 10:03:40", "31/01/2022", "Конаков Павел (Вы)", 4, "15/01/2022 10:03:40"]
                    ]
                }
                actions={[
                    <IconButton mr="5px" variant="ghost" icon={<DownloadIcon/>} color="blue.200"/>,
                    <IconButton mr="5px" variant="ghost" icon={<EditIcon/>} color="green.200"/>,
                    <IconButton mr="5px" variant="ghost" icon={<CloseIcon/>} color="red.200"/>
                ]}
            />
        </Box>

    </div>
  )
}

export default ProjectList