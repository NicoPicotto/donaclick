import data from "@/app/MockData/ongData.json";
import { Text, Stack, SimpleGrid, Heading, Image } from "@chakra-ui/react";
import { Image as NextImage } from "next/image";

export default function Ong({ params }) {
  const item = data.find((p) => p.slug === params.label);

  return (
    <Stack as='main' paddingInline='2em' paddingBlock='2em' align='center'>
      <Stack w='100%' maxW='1280px'>
        <SimpleGrid columns={2} spacing={20}>
          <Stack justify='center'>
            <Heading>{item.label}</Heading>
            <Text textAlign='justify'>{item.description}</Text>
          </Stack>
          <Image
            as={NextImage}
            src={item.path}
            w={400}
            h={300}
            alt={`Logo de ${item.title}`}
            objectFit='cover'
          />
        </SimpleGrid>
      </Stack>
    </Stack>
  );
}
