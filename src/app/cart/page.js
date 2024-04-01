import { Stack, Image, SimpleGrid, Link, Heading } from "@chakra-ui/react";
import { Image as NextImage } from "next/image";
import { Link as NextLink } from "next/link";

export default function Cart() {
  return (
    <Stack as='main' paddingInline='2em' paddingBlock='2em' align='center'>
      <Stack w='100%' maxW='1280px'>
        <Heading>Cart View</Heading>
      </Stack>
    </Stack>
  );
}
