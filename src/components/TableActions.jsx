import { CloseIcon, DownloadIcon, EditIcon } from '@chakra-ui/icons'
import { Flex, IconButton, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

function TableActions({headerNames, data, actions}) {
  return (
      <Table>
          <Thead position="sticky" top={0} bgColor="white">
            <Tr>
                {headerNames.map((elem) => <Th>{elem}</Th>)}
                <Th>Действия</Th>
            </Tr>
          </Thead>
          <Tbody>
              {data.map((row) =>
                <Tr>
                    {row.map((elem) => <Td>{elem}</Td>)}
                    <Td>
                        <Flex>
                            {row.length > 0 && actions}
                        </Flex>
                    </Td>
                </Tr>
              )}
          </Tbody>
      </Table>
  )
}

export default TableActions