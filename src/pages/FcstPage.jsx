import React from 'react'
import Header from '../components/Header'
import { Flex, Heading, IconButton, Center, Box, Text } from '@chakra-ui/react'

import {FiMoreHorizontal} from "react-icons/fi"

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

import {Line} from "react-chartjs-2"
import { faker } from '@faker-js/faker'
import TableDictionary from '../components/TableDictionary';

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


function FcstPage() {
  let dts = Array.from({length:28}, (_, i) => i + 1);
  return (
    <div>
        <Header moduleName={"Расчёты прогнозов"}/>
        <Flex mx="80px">
          <Center>
            <Heading as='h2' color="blue.800">
                Прогноз на Marshall Minor II с 01/02/2022 по 28/02/2022
            </Heading>
            <IconButton 
              aria-label='More Options' 
              icon={<FiMoreHorizontal/>} 
              variant="ghost" 
              color="blue.800"
            />
          </Center>
        </Flex>

        <Box mx="80px" mt="32px">
            <Text size="md" color="blue.800"><b>Прогнозируемый товар:</b> <u>Marshall Minor II</u></Text>
            <Text size="md" mt="7px" color="blue.800"><b>Дата и время запуска прогноза:</b> 15/02/2022 10:38:22</Text>
            <Text size="md" mt="7px" color="blue.800"><b>Пользователь запуска:</b> Конаков Павел (Вы)</Text>
        </Box>
        <Heading size="md" ml="80px" mt="32px" color="blue.800">График динамики спроса на товар в расматриваемый период</Heading>
        <Box mx="80px" mt="10px">
            <Line
                ptions={{
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
                  labels: dts,
                  datasets:[{
                    data: dts.map((elem) => faker.datatype.number({min:10, max:30})),
                    label:'Запас товара на складе',
                    borderColor: 'rgb(0,0,255)',
                    backgroundColor: 'rgba(0,0,255,0.2)',
                    tension: 0.4,
                    fill: true 
                  }]
                }}
            />
        </Box>
        <Heading size="md" color="blue.800" mx="80px" mt="32px">Таблица динамики спроса на товар в расматриваемый период</Heading>
        <Box
              mt='10px'
              mx='80px'
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
                headerNames={[
                    "Дата", "Спрос"
                ]}
                data={[
                    ["01/02/2022", 12],
                    ["01/02/2022", 12],
                    ["01/02/2022", 12],
                    ["01/02/2022", 12],
                    ["01/02/2022", 12],
                    ["01/02/2022", 12],
                    ["01/02/2022", 12],
                    ["01/02/2022", 12],
                    ["01/02/2022", 12],
                    ["01/02/2022", 12],
                    ["01/02/2022", 12],
                    ["01/02/2022", 12],
                    ["01/02/2022", 12],
                    ["01/02/2022", 12],
                    ["01/02/2022", 12],
                    ["01/02/2022", 12],
                    ["01/02/2022", 12],
                    ["01/02/2022", 12],
                    ["01/02/2022", 12],
                    ["01/02/2022", 12],
                    ["01/02/2022", 12],
                    ["01/02/2022", 12],
                    ["01/02/2022", 12]
                ]}
            />
        </Box>
    </div>
  )
}

export default FcstPage