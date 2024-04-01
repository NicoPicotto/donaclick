import { SimpleGrid, Stack, Heading, Text, Image } from "@chakra-ui/react";
import { Image as NextImage } from "next/image";

export default function Nosotros() {
  return (
    <Stack as='main' paddingInline='2em' paddingBlock='2em' align='center'>
      <Stack w='100%' maxW='1280px'>
        <SimpleGrid columns={2} spacing={20}>
          <Stack justify='center'>
            <Heading>Lorem Ipsum</Heading>
            <Text textAlign='justify'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </Stack>
          <Image
            as={NextImage}
            src='/Nosotros/about-img.webp'
            w={600}
            h={500}
            alt='Equipo de DonaClick'
            objectFit='cover'
          />
        </SimpleGrid>
        <SimpleGrid columns={2} spacing={20}>
          <Image
            as={NextImage}
            src='/Nosotros/about-img.webp'
            w={600}
            h={500}
            alt='Equipo de DonaClick'
            objectFit='cover'
          />
          <Stack justify='center'>
            <Heading>Lorem Ipsum</Heading>
            <Text textAlign='justify'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </Stack>
        </SimpleGrid>
      </Stack>
    </Stack>
  );
}
