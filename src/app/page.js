import { Text, Stack } from "@chakra-ui/react";
import ProductList from './Components/ProductList/ProductList';
export default function Home() {
  return (
    <Stack as='main'>
      <ProductList />
    </Stack>
  );
}
