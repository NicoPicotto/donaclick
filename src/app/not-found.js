import { Stack, Heading, Text, Button, Link } from "@chakra-ui/react";
import { Link as NextLink } from "next/link";

export default function NotFound() {
  return (
    <Stack paddingInline='2em' paddingBlock='2em' align='center' h='80dvh'>
      <Stack w='100%' maxW='1280px' h='100%' justify='center'>
        <Heading>Página no encontrada.</Heading>
        <Text>Lo sentimos, la página que buscas no existe.</Text>
        <Link as={NextLink} href='/'>
          <Button w='fit-content'>Volver al home</Button>
        </Link>
      </Stack>
    </Stack>
  );
}
