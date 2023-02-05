import { ReactNode } from 'react';
import { APP_NAME } from '@/config'
import Head from 'next/head'
import {
  Box,
  Flex,
  Avatar,
  DarkMode,
  HStack,
  Link,
  IconButton,
  Image,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';

const NavLink = ({ label, dest }: any) => (
  <Link
    px={2}
    py={1}
    maxWidth={24}
    bg={useColorModeValue('gray.100', 'gray.800')}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.300', 'gray.600'),
    }}
    href={dest}>
    {label}
  </Link>
);

export default function withAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="#1A1A1A" px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Image marginLeft='0px' maxHeight='64px' objectFit='cover' alt='logo' src='/images/logo.webp' />
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>

              <NavLink label="Home" dest="/" />
              <NavLink label="About" dest="/about" />
              <NavLink label="Contact" dest="/contact" />

            </HStack>
          </HStack>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <NavLink label="Home" dest="/" />
              <NavLink label="About" dest="/about" />
              <NavLink label="Contact" dest="/contact" />
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

