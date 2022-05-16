import React from 'react'

import { 
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td
} from '@chakra-ui/react'

function TableDictionary({headerNames, data, props}) {
  return (
    <Table>
        <Thead pt="10px" position="sticky" top={0} bgColor="white">
            <Tr>
                {headerNames.map((elem) => <Th>{elem}</Th>)}
            </Tr>
        </Thead>
        <Tbody>
            {data.map((row) =>
                <Tr>
                    {row.map((elem) => <Td>{elem}</Td>)}
                </Tr>
            )}
        </Tbody>
    </Table>
  )
}

export default TableDictionary