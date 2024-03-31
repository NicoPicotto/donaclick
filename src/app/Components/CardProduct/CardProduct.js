import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Text,
  Image,
  Button,
  Heading,
} from "@chakra-ui/react";
import { Image as NextImage } from "next/image";

export default function CardProduct({ product }) {
  // Para formatear el precio

  const formattedPrice = product.precio.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  return (
    <Card maxW='sm'>
      <CardBody>
        <Image
          as={NextImage}
          src={product.imagen}
          alt={product.nombre}
          width={400}
          maxH={350}
          objectFit='cover'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{product.nombre}</Heading>
          <Text color='azul' fontSize='xl'>
            {formattedPrice}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button variant='solid' w='100%' colorScheme='blue'>
          Ver más
        </Button>
      </CardFooter>
    </Card>
  );
}
