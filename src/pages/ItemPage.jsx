import React from 'react'

import { Heading, Box, IconButton, Flex, Center, Spacer, Text, FormControl, FormLabel, Input, Button} from '@chakra-ui/react';
import { FiMoreHorizontal } from 'react-icons/fi'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from "react-chartjs-2"

import { faker } from '@faker-js/faker'

import Header from '../components/Header'
import TableDictionary from '../components/TableDictionary'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function ItemPage({itemName}) {
  let currentMonthDates = Array.from({length: 31}, (_, i) => i + 1);
  return (
      <div>
      <Header moduleName={"Товары магазина"}/>
      <Box mx="80px" mt="25px" alignItems="center">
        <Flex>
          <Center>
            <Heading as='h2' color="blue.800">{itemName || "Название товара"}</Heading>
            <IconButton 
              aria-label='More Options' 
              icon={<FiMoreHorizontal/>} 
              variant="ghost" 
              color="blue.800"
            />
          </Center>
        </Flex>

        <Flex mt="25px">
          <Box width="100%">
            <Heading as='h3' size='md' color="blue.800">Технические характеристики</Heading>
            <Box 
              overflowY="auto" 
              height="250px" 
              mt="10px" 
              bgColor="white" 
              borderRadius="xl" 
              border='2px' 
              borderColor='gray.300'
              px='5px'
              boxShadow="lg"
            >
             <TableDictionary
              headerNames={['Характеристика', 'Значение']}
              data={[
                ["Цвет", "Черный"],
                ["Кол-во часов работы", 10],
                ["Тип подключения", "Беспроводные (Bluetooth)"],
                ["Тип наушников", "Акустические"]
              ]}
             /> 
            </Box>
          </Box> {/* Блок тех. характеристик */}
          <Spacer/>
          <Box ml="40px" width="100%">
            <Heading as="h3" size="md" color="blue.800">Описание</Heading>
            <Box 
              overflowY="auto" 
              height="250px" 
              mt="10px" 
              bgColor="white" 
              borderRadius="xl" 
              border='2px' 
              borderColor='gray.300'
              p="5px"
              boxShadow="lg"
            >
              <Text fontSize='lg'>
                Самый крутой товар на свете, который хотел бы каждый пользователь продукции
                американской компании Apple. Данный продукт был представлен на знаменитой презентации данной
                корпорации в 2022 году.
              </Text>
            </Box>
          </Box> {/* Блок описания */}
        </Flex>
        <Box mt="25px">
          <Heading as='h3' size='md' color="blue.800">
            Запасы товара в Москве на декабрь 2022 (с учётом статистического спроса)
          </Heading>
          <Flex>
            <Box
              mt='10px'
              height="500px"
              bgColor="white"
              borderRadius="xl"
              border='2px'
              borderColor='gray.300'
              p="5px"
              width="100%"
              boxShadow="lg"
            >
              {/* Тут должен быть график функции запаса*/}
              <Line 
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  legend: {
                    position: 'right',
                  },
                  scales: {
                    y: {
                      suggestedMin: 0
                    }
                  } 
                }}
                data={{
                  labels: currentMonthDates,
                  datasets:[{
                    data: currentMonthDates.map((elem) => faker.datatype.number({min:0, max:20})),
                    label:'Запас товара на складе',
                    borderColor: 'rgb(0,0,255)',
                    backgroundColor: 'rgba(0,0,255,0.2)',
                    tension: 0.4,
                    fill: true 
                  }]
                }}
              />
            </Box>
            <Spacer/>
            <Box
              mt='10px'
              ml='40px'
              overflowY="auto"
              height="500px"
              bgColor="white"
              borderRadius="xl"
              border='2px'
              borderColor='gray.300'
              px="5px"
              width="100%"
              boxShadow="lg"
            >
            <TableDictionary
              headerNames={['Дата', 'Запас на складе на конец дня']}
              data={[
                ['01/12/2021', 2],
                ['02/12/2021', 3],
                ['02/12/2021', 3],
                ['02/12/2021', 3],
                ['02/12/2021', 3],
                ['02/12/2021', 3],
                ['02/12/2021', 3],
                ['02/12/2021', 3],
                ['02/12/2021', 3],
                ['02/12/2021', 3],
                ['02/12/2021', 3],
                ['02/12/2021', 3],
                ['02/12/2021', 3],
                ['03/12/2021', 10]
              ]}
            />
            </Box>
          </Flex>
        </Box> {/* График запаса товара на складе */}
        <Box mt="25px">
           <Heading as="h3" size="md" color="blue.800">
             Поставки в магазин
           </Heading>
           <Flex>
             <Box
                mt='10px'
                overflowY="auto"
                height="250px"
                bgColor="white"
                borderRadius="xl"
                border='2px'
                borderColor='gray.300'
                px="5px"
                width="100%"
                boxShadow="lg"
             >
              <TableDictionary
                headerNames={['Дата','Количество']}
                data={[
                  ['01/12/2021', 5],
                  ['01/12/2021', 5],
                  ['01/12/2021', 5],
                  ['01/12/2021', 5],
                  ['01/12/2021', 5],
                  ['01/12/2021', 5],
                  ['01/12/2021', 5],
                  ['01/12/2021', 5],
                  ['01/12/2021', 5]
                ]}
              />
             </Box> {/* Поставки в магазин */}
             <Spacer/>
             <Box
              mt='10px'
              ml='40px'
              overflowY="auto"
              height="250px"
              bgColor="white"
              borderRadius="xl"
              border='2px'
              borderColor='gray.300'
              py="10px"
              width="100%"
              boxShadow="lg"
             >
              <FormControl ml="15px">
                <FormLabel>Дата</FormLabel>
                <Input id='order_date' type='date' width='300px'/>
              </FormControl>
              <FormControl ml="15px" mt='10px'>
                <FormLabel>Количество</FormLabel>
                <Input id='order_cnt' type='number' width='300px' min={0}/>
              </FormControl>
              <Button ml="15px" mt='10px' colorScheme="teal" variant='solid'>Добавить</Button>
             </Box> {/* Форма ввода доп поставок */}
           </Flex>
        </Box> {/* Информация о поставках товаров на склад */}
        <Box mt="25px">
          <Heading as="h3" size="md" color="blue.800">
            Динамика ценообразования
          </Heading>
          <Box
            mt='10px'
            width="100%"
            bgColor="white"
            border='2px'
            borderRadius='xl'
            borderColor='gray.300'
            height="400px"
            boxShadow="lg"
          >
            {/* Тут должен быть график ценообразования */}
            <Line
              options = {{
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                  position: 'right',
                },
                scales: {
                  y: {
                    suggestedMin: 0
                  }
                }
              }}
              data={{
                    labels: currentMonthDates,
                    datasets: [{
                    label: 'Цена на товар',
                    data: currentMonthDates.map((elem) => faker.finance.amount(5000, 7000)),
                    borderColor: 'rgb(0,0,255)',
                    backgroundColor: 'rgba(0,0,255,0.2)',
                    tension: 0.4,
                    fill: true 
                  }]
                }
              }
            />
          </Box> 
        </Box> {/* График ценообразования товара */}
      </Box>
    </div>
  )
}

export default ItemPage