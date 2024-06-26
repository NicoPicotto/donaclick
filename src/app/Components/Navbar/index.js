"use client";
import {
  HStack,
  Stack,
  Image,
  Link,
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  Divider,
} from "@chakra-ui/react";
import { RiMenu3Line } from "react-icons/ri";
import { Link as NextLink } from "next/link";
import { usePathname } from "next/navigation";
import { FaCartShopping } from "react-icons/fa6";
import "./styles.css";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pathName = usePathname();

  const MenuButtons = [
    { label: "Sobre DonáClick", link: "/nosotros", variant: "link" },
    // { label: "Conocé el programa", link: "/contacto", variant: "link" },
    { label: "ONG's", link: "/ongs", variant: "link" },
    { label: "Ingresá", link: "/contacto", variant: "solid" },
  ];

  return (
    <Stack
      as='nav'
      paddingInline='2em'
      paddingBlock='1em'
      align='center'
      bgColor='azul'
    >
      <HStack w='100%' maxW='1280px' align='center' justify='space-between'>
        <Link as={NextLink} href='/'>
          <Image src='/Navbar/logo.png' alt='Sveatech Logo' w='185px' />
        </Link>
        <HStack gap={10} display={{ base: "none", md: "flex" }}>
          {MenuButtons.map((item) => (
            <Link as={NextLink} key={item.label} href={item.link}>
              <Button
                variant={item.variant}
                color='blanco'
                textUnderlineOffset={2}
                textDecor={
                  pathName === item.link &&
                  item.variant === "link" &&
                  "underline"
                }
              >
                {item.label}
              </Button>
            </Link>
          ))}
          <Divider border='1px solid white' orientation='vertical' h={8} />
          <Link as={NextLink} href='/cart'>
            <IconButton
              icon={<FaCartShopping color='white' />}
              variant='unstyled'
            />
          </Link>
        </HStack>

        <IconButton
          display={{ base: "block", md: "none" }}
          icon={<RiMenu3Line />}
          fontSize='2rem'
          onClick={onOpen}
          bgColor='transparent'
          color='blanco'
          _hover={{ bgColor: "transparent" }}
        />
      </HStack>
      <Drawer placement='right' size='full' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton fontSize='1rem' p='2em' />
          <DrawerBody bgColor='azul'>
            <Stack h='100%' justify='center' align='center' gap='2em'>
              {MenuButtons.map((item) => (
                <Link key={item.label} to={item.link}>
                  <Button
                    w='100%'
                    fontSize='1.5em'
                    variant={item.variant}
                    color='blanco'
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Stack>
  );
};

export default Navbar;
