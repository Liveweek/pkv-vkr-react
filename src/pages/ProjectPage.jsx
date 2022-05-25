import React from 'react'
import Header from '../components/Header'

import {
    Flex,
    Center,
    Heading,
    IconButton,
    Input,
    Spacer,
    Button,
    Box
} from "@chakra-ui/react"
import { CloseIcon, AddIcon, CalendarIcon } from '@chakra-ui/icons'
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react'

import {FiMoreHorizontal} from "react-icons/fi"
import TableActions from '../components/TableActions'

function ProjectPage() {
  return (
    <div width="100%">
        <Header moduleName={"Проект закупки"}/>

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

        <Flex mx="80px" mt="36px">
            <Center>
                <Heading size="sm" color="blue.800">Планируемая дата поставки</Heading>
                <Input type="date" id="suply_date" bgColor="white"/>
            </Center>
        </Flex>

        <Flex mx="80px" mt="36px">
            <Center>
            <Heading size="sm" color="blue.800">Список закупаемых товаров</Heading>
            </Center>
            <Spacer/>
            <Button variant="solid" colorScheme="blue">Добавить товар</Button>
            <Button ml="10px" variant="solid" colorScheme="green">Рекомендации</Button>
        </Flex>

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
            <TableActions
                headerNames={["Название товара", "Кол-во", "Новый товар"]}
                data={[[]]
                //     [[
                //         "Apple Airpods Pro", 
                //         <NumberInput min={0} defaulValue={0}>
                //             <NumberInputField />
                //             <NumberInputStepper>
                //                 <NumberIncrementStepper />
                //                 <NumberDecrementStepper />
                //             </NumberInputStepper>
                //         </NumberInput>, 
                //         "Нет"
                //     ],
                //     [
                //         "Колонка Beats by Dre", 
                //         <NumberInput min={0} defaulValue={0}>
                //             <NumberInputField />
                //             <NumberInputStepper>
                //                 <NumberIncrementStepper />
                //                 <NumberDecrementStepper />
                //             </NumberInputStepper>
                //         </NumberInput>, 
                //         "Нет"
                //     ],
                //     [
                //         "Товар2", 
                //         <NumberInput min={0} defaulValue={0}>
                //             <NumberInputField />
                //             <NumberInputStepper>
                //                 <NumberIncrementStepper />
                //                 <NumberDecrementStepper />
                //             </NumberInputStepper>
                //         </NumberInput>, 
                //         "Нет"
                //     ],
                //     [
                //         "Товар2", 
                //         <NumberInput min={0} defaulValue={0}>
                //             <NumberInputField />
                //             <NumberInputStepper>
                //                 <NumberIncrementStepper />
                //                 <NumberDecrementStepper />
                //             </NumberInputStepper>
                //         </NumberInput>, 
                //         "Нет"
                //     ]
                // ]
                }
                actions={[
                    <IconButton mr="5px" variant="ghost" icon={<CloseIcon/>} color="red.200"/>
                ]}
            />
        </Box>

        <Flex mx="80px" mt="36px">
            <Center mr="15px">
            <Heading size="sm" color="blue.800">Рассчитанный спрос для Новых товаров</Heading>
            </Center>
            <IconButton mr="10px" variant="ghost" icon={<AddIcon/>}/>        

        </Flex>

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
            <TableActions
                headerNames={["Название товара", "Дата начала прогноза", "Дата конца прогноза"]}
                data={[[]]
                    // [[
                    //     "Товар1",
                    //     "01/02/2022",
                    //     "31/02/2022"
                    // ]]
                }
                actions={[
                    <IconButton mr="5px" variant="ghost" icon={<CalendarIcon/>} color="blue.500"/>
                ]}
            />
        </Box>
    </div>
  )
}

export default ProjectPage