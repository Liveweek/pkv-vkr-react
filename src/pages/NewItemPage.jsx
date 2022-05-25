import { CalendarIcon, CopyIcon, EditIcon, CloseIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, FormControl, FormLabel, Heading, IconButton, Input, Select, Spacer } from '@chakra-ui/react'
import React from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'


import Header from '../components/Header'
import TableActions from '../components/TableActions'

function NewItemPage() {
  return (
    <div>
        <Header moduleName={"Новые товары"}/>

        <Flex mx="80px" mt="32px">
            <Heading size="lg" color="blue.800">Marshall Minor II</Heading>
            <IconButton ml="7px" icon={<FiMoreHorizontal/>}/>
            <Spacer/>
            <Button
                variant="solid"
                colorScheme="blue"
                size="lg"
                width="200px"
                leftIcon={<CalendarIcon/>}

            >
                Прогноз
            </Button>
            <Button
                variant="solid"
                ml="10px"
                colorScheme="green"
                size="lg"
                width="200px"
                leftIcon={<CopyIcon/>}
            >
                Сохранить
            </Button>
        </Flex>
        <Heading mx="80px" size="md" color="blue.800" mt="32px">Базовые данные о товаре</Heading>
        <Box
            mt="15px"
            mx="80px"
            bgColor="white"
            borderRadius="xl"
            border="2px"
            borderColor="gray.200"
            p="10px"
            boxShadow="lg"
        >
            <Flex>
                <Box width="300px">
                   <FormControl>
                       <FormLabel>Категория 1</FormLabel>
                       <Select placeholder="Выберите категорию">
                           <option id='val1'>Электроника</option>
                       </Select>
                   </FormControl> 
                   <FormControl mt="7px">
                       <FormLabel>Категория 2</FormLabel>
                       <Select placeholder="Выберите категорию">
                           <option id='val1'>Наушники и аудиотехника</option>
                       </Select>
                   </FormControl> 
                   <FormControl mt="7px">
                       <FormLabel>Категория 3</FormLabel>
                       <Select placeholder="Выберите категорию">
                           <option id='val1'>Наушники и Bluetooth-гарнитуры</option>
                       </Select>
                   </FormControl> 
                </Box>
                <Box ml="15px" width="300px">
                    <FormControl>
                        <FormLabel>Производитель</FormLabel>
                        <Select placeholder="Выберите...">
                            <option>Marshall</option>
                        </Select>
                    </FormControl>
                    <FormControl mt="7px">
                        <FormLabel>Цена для продажи</FormLabel>
                        <Input id="price_val" placeholder="Введите число"/>
                    </FormControl>
                </Box>
            </Flex>
        </Box>
        <Flex mt="32px" mx="80px">
            <Box width="35%">
                <Heading size="md" color="blue.800">Новая характеристика</Heading>
                <Box
                    mt="10px"
                    bgColor="white"
                    borderRadius="xl"
                    border="2px"
                    borderColor="gray.200"
                    p="10px"
                    boxShadow="lg"
                >
                    <FormControl>
                        <FormLabel>Характеристика</FormLabel>
                        <Select placehorlder="Выберите...">
                        </Select>
                    </FormControl>
                    <FormControl mt="7px">
                        <FormLabel>Значение</FormLabel>
                        <Input id="attr_value" placeholder="Введите значение..." type="number"/>
                    </FormControl>
                    <Button variant="solid" colorScheme="blue" mt="10px" width="100%" height="70px">
                        Добавить
                    </Button>
                </Box>
            </Box>
            <Box ml="30px" width="65%">
                <Heading size="md" color="blue.800">Характеристики нового товара</Heading>
                <Box
                    mt="10px"
                    bgColor="white"
                    borderRadius="xl"
                    border="2px"
                    borderColor="gray.200"
                    p="10px"
                    overflowY="auto"
                    height="400px"
                >
                    <TableActions
                        headerNames={["Название", "Значение"]}
                        data={[
                            ["Тип устройства", "беспроводные наушники"],
                            ["Конструкция", "внутриканальные"],
                            ["Технология", "динамические"],
                            ["Минимальная воспросизводимая частота", "20 Гц"],
                            ["Максимальная воспросизводимая частота", "20000 Гц"],
                            ["Чувствительность", "117 дБ"],
                            ["Параметры чувствительности", "дБ/мВт"],
                            ["Вес", "22.5 г"],
                            ["Диаметр мембраны", "14.2 мм"],
                        ]}
                        actions={[
                            <IconButton mr="5px" size="lg" variant="ghost" color="green.200" icon={<EditIcon/>}/>,
                            <IconButton mr="5px" size="lg" variant="ghost" icon={<CloseIcon/>} color="red.200"/>
                        ]}
                    />
                </Box>
            </Box>
        </Flex>
        <Heading mt="32px" mx="80px" size="md" color="blue.800">Недавно рассчитанные прогнозы</Heading>
        <Box
            mx="80px"
            mt="10px"
            bgColor="white"
            borderRadius="xl"
            border="2px"
            borderColor="gray.200"
            p="10px"
            overflowY="auto"
            height="400px"
        >
            <TableActions
                headerNames={["Дата и время прогноза", "Пользователь запуска", "Дата начала прогноза", "Дата конца проггноза"]}
                data={[
                    ["10/02/2022 10:38:22", "Конаков Павел (Вы)", "01/02/2022", "28/02/2022"]
                ]}
                actions={[
                    <IconButton mr="5px" variant="ghost" icon={<ArrowForwardIcon/>}/>
                ]}
            />
        </Box>
    </div>
  )
}

export default NewItemPage