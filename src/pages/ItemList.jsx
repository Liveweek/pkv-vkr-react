import React from 'react'

import { Box, Flex, Icon,  Text, Center, Select, InputGroup, InputLeftAddon, Input, Button, Spacer, FormControl, FormLabel, InputLeftElement, IconButton } from '@chakra-ui/react'
import { BsFilter } from "react-icons/bs"
import { ImPriceTag } from "react-icons/im"

import Header from '../components/Header'
import { SearchIcon, SettingsIcon } from '@chakra-ui/icons'
import TableDictionary from '../components/TableDictionary'


function ItemList() {
  return (
      <div style={{height: "100%"}}>
        <Header moduleName={"Товары магазина"}/>
        <Flex height="89%">
            <Box
                mx="20px"
                bgColor="gray.300"
                width="20%"
                borderRadius="xl"
                height="100%"
            >
                <Flex px="12px" flexDirection="column" height="100%">
                    <Center mt="12px">
                        <Icon as={BsFilter} mx="5px"/>
                        <Text size="md">Фильтры</Text>
                    </Center>
                    <Select placeholder="Категория 1" mt="12px" bgColor="white">
                        <option val="op1">Наушники</option>
                    </Select>
                    <Select placeholder="Категория 2" mt="12px" bgColor="white">
                        <option val="op1">Акустические</option>
                    </Select>
                    <Select placeholder="Категория 3" mt="12px" bgColor="white">
                        <option val="op1">Полноразмерные</option>
                    </Select>

                    <Center mt="20px">
                        <Icon as={ImPriceTag} mx="5px"/>
                        <Text size="md">Цена</Text>
                    </Center>
                    <InputGroup mt="12px">
                        <InputLeftAddon children="От"/>
                        <Input type="number" min={0} placeholder="0" bgColor="white"/>
                    </InputGroup>
                    <InputGroup mt="12px">
                        <InputLeftAddon children="До"/>
                        <Input type="number" min={0} placeholder="1000" bgColor="white"/>
                    </InputGroup>
                    
                    <Spacer/>
                    <Button
                        variant="solid"
                        size="lg"
                        bgColor="blue.700"
                        colorScheme="blue"
                        width="100%"
                        mb="15px"
                    >
                    Применить
                    </Button>
                </Flex>
            </Box>
            <Box
                width="80%"
                mx="20px"
            >
                <Flex>
                    <Center width="100%">
                    <FormControl mr="13px">
                        <FormLabel>Поиск</FormLabel>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<SearchIcon color='gray.300'/>}
                            />
                            <Input type="text" bgColor="white" placeholder="Введите название товара"/>
                        </InputGroup>
                    </FormControl>
                    <Button m="0" height="100%" leftIcon={<SettingsIcon/>} variant="solid" colorScheme="blue" bgColor="blue.700">Сортировка</Button>
                    </Center>
                </Flex>    
                <Box
                    borderRadius="xl"
                    border="2px"
                    borderColor="gray.300"
                    bgColor="white"
                    mt="18px"
                    height="89%"
                    pt="7px"
                >
                    <TableDictionary
                        headerNames={['Название', 'Производитель', 'Цена', 'Рейтинг']}
                        data={[
                            ['asdasd','adasdasd','asdasd','asdasd']
                        ]}
                    />
                </Box>

            </Box>
        </Flex>
      </div>
  )
}





export default ItemList