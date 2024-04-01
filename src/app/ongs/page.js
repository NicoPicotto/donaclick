"use client";
import { useEffect, useState } from "react";
import { Stack, Image, SimpleGrid, Link } from "@chakra-ui/react";
import { Image as NextImage } from "next/image";
import { Link as NextLink } from "next/link";

export default function Ongs() {
  const [ongList, setOngList] = useState([]);
  useEffect(() => {
    // despues cambio por el fetchh
    import("../MockData/ongData.json").then((data) => {
      setOngList(data.default);
    });
  }, []);

  return (
    <Stack as='main' paddingInline='2em' paddingBlock='2em' align='center'>
      <Stack w='100%' maxW='1280px'>
        <SimpleGrid columns={3} spacing={20}>
          {ongList.map((logo) => (
            <Link as={NextLink} href={`/ongs/${logo.slug}`} key={logo.label}>
              <Stack
                shadow='md'
                _hover={{ shadow: "lg", marginTop: -1 }}
                transition='0.1s ease-in'
                justify='center'
                align='center'
              >
                <Image
                  as={NextImage}
                  w={300}
                  h={200}
                  alt={logo.label}
                  src={logo.path}
                />
              </Stack>
            </Link>
          ))}
        </SimpleGrid>
      </Stack>
    </Stack>
  );
}
