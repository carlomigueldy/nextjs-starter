import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

export type AppTableProps<T> = {
  headers: string[];
  items: object[];
};

const PlaceholderItem = () => (
  <Tr>
    <Td>inches</Td>
    <Td>millimetres (mm)</Td>
    <Td isNumeric>25.4</Td>
  </Tr>
);

function AppTable() {
  return (
    <>
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Thead>
        <Tbody>
          <PlaceholderItem />
          <PlaceholderItem />
          <PlaceholderItem />
          <PlaceholderItem />
          <PlaceholderItem />
          <PlaceholderItem />
          <PlaceholderItem />
          <PlaceholderItem />
          <PlaceholderItem />
          <PlaceholderItem />
          <PlaceholderItem />
          <PlaceholderItem />
          <PlaceholderItem />
          <PlaceholderItem />
          <PlaceholderItem />
          <PlaceholderItem />
          <PlaceholderItem />
          <PlaceholderItem />
          <PlaceholderItem />
          <PlaceholderItem />
          <PlaceholderItem />
          <PlaceholderItem />
          <PlaceholderItem />
          <PlaceholderItem />
          <PlaceholderItem />
          <PlaceholderItem />
          <PlaceholderItem />
          <PlaceholderItem />
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </>
  );
}

export default AppTable;
