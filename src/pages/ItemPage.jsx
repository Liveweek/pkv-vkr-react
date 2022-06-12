import React, { useMemo } from 'react'
import {useState} from 'react'
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
  
  {
    /* TODO: реализовать систему рассчёта модели управления запасами 
      - Вынести все захаркоденные в компоненты данные в начало тела функции для инициализации;
      - Подключить хуки для обработки кнопки и значений из полей ввода;
      - Вытащить данные даты на проверку текущего месяца и получить данные о выбранном в поле дне месяца;
      - Прибавить по выбранному дню количество поставки;
    */
  }
  /* Текущие дни месяца */
  let currentMonthDates = Array.from({length: 28}, (_, i) => i + 1);
  let currentMonthBeginDate = new Date(2022, 1, 1);
  const [currentYear, currentMonth] = [currentMonthBeginDate.getFullYear(), currentMonthBeginDate.getMonth()]
  const J0 = 40;  
  /* Hooks */
  /* Спрос по дням */
  const [demand, setDemand] = useState(Array.from({length: 28}, (_, i) => 1));
  /* Поставки по дням */
  const [supply, setSupply] = useState(Array.from({length: 28}, (_, i) => 0));

  /* Запасы на текущий месяц*/
  const currentMonthStorage = useMemo(() => {
    let result = Array.from({length: 28}, (_, i) => 0);

    let newRes = [...result];

    for (let i=0; i<28; i += 1) {
      if (i === 0) {
        newRes[0] = J0 + supply[i] - demand[i];
      } else {
        newRes[i] = newRes[i - 1] + supply[i] - demand[i];
      } 
    }

    return newRes;
  }, [demand, supply]);
  // const [currentMonthStorage, setCurMonthStorage] = useState(Array.from({length: 28}, (_, i) => i + 10).sort().reverse());
  /* Табличное представление запасов */
  const storageTableView = useMemo(
    () => currentMonthDates.map((elem) => [new Date(currentYear, currentMonth, elem).toLocaleDateString(), currentMonthStorage[elem - 1]]),
    [currentMonthStorage] 
  );
  /* Поставки */
  const [supplyInfo, setSupplyInfo] = useState([]);
  /* Состояние поля ввода */
  const [supplyInfoInput, setSupplyInfoInput] = useState({
    date: new Date(2022, 1, 1),
    supplyCount: 0
  })


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
            Запасы товара в Москве на февраль 2022 (с учётом статистического спроса)
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
                    data: currentMonthStorage,
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
              data={
                storageTableView
              }
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
                data={supplyInfo}
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
                <Input id='order_date' type='date' width='300px' 
                  onChange={(e) => {
                    setSupplyInfoInput({...supplyInfoInput, date: new Date(Date.parse(e.target.value))});
                  }}
                />
              </FormControl>
              <FormControl ml="15px" mt='10px'>
                <FormLabel>Количество</FormLabel>
                <Input id='order_cnt' type='number' width='300px' min={0}
                  onChange={(e) => {
                    setSupplyInfoInput({...supplyInfoInput, supplyCount: e.target.value})
                   }
                  }
                />
              </FormControl>
              <Button 
                ml="15px"
                mt='10px'
                colorScheme="teal"
                variant='solid'
                onClick={() => {

                    let dateMonth = supplyInfoInput.date.getMonth();
                    let dateYear = supplyInfoInput.date.getFullYear();
                    if (dateMonth === currentMonth && dateYear === currentYear) {
                      setSupplyInfo([...supplyInfo, [supplyInfoInput.date.toLocaleDateString(), supplyInfoInput.supplyCount]]);

                      let dateDay = supplyInfoInput.date.getDate();
                      setSupply(() => {
                        let sup_copy = [...supply];
                        sup_copy[dateDay - 1] += parseInt(supplyInfoInput.supplyCount);
                        return sup_copy;
                      })
                    }

                  }
                }
              >
                Добавить
              </Button>
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