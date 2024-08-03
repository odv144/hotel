import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Hide,
  IconButton,
  Image,
  Img,
  Show,
  Text,
  VStack,
  useBreakpoint,
  useBreakpointValue,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link, useLocation } from "react-router-dom";
import { LinkHover } from "./LinkHover";

export const Header = () => {
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
 
  const isMobil = useBreakpointValue({base:true,sm:true,md:false,xl:false});

  return (
    <Box>
      <Box>
      {isMobil 
      ?
      (
       <Flex
          h={"5.5em"}
          as="nav"
          justifyContent="space-between"
          alignItems={"center"}
          
          px={["2em","4.5em"]}
          pb="1em"
          bg="brand.light"
          color={"white"}
        >
          <Flex align="center" h="100px">
            <Link to="/">
              <Image src="/img/logo2linea.svg" alt="logo" minW={'150px'} />
            </Link>
          </Flex>

          <IconButton 
            // size="md"
            icon={<HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={onOpen}
            color="secondary.500"
            bg="brand.default"
            _hover='none'
          />
        </Flex>
      ):(
<Flex
          h={"5.5em"}
          as="nav"
          justifyContent="space-between"
          alignItems={"center"}
          
          px={"3.5em"}
          pb="1em"
          bg="brand.light"
          color={"white"}
        >
          <Flex align="center" h="100px">
            <Link to="/">
              <Image src= "/img/logo1linea.svg" alt="logo" minW={'150px'} />
            </Link>
          </Flex>

          <Flex
          
          //  spacing={3} 
           width={'400px'}
           justifyContent={'center'}
           gap={'1em'}
           flexShrink={0}
          //  display={{ base: "none",sm:'none', md: "flex" }}
           mr={"5%"}>
            <LinkHover to="/nosotros" currentPath={location.pathname}>
              Sobre Nosotros
            </LinkHover>
            <LinkHover to="/interes" currentPath={location.pathname}>
              Sitios de Interes
            </LinkHover>

          </Flex>
          
          <Button variant="filled"  >
              <Link to={"/consulta"}>Consultar</Link>
            </Button>
         
          <IconButton 
            // size="md"
            icon={<HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={onOpen}
            color="secondary.500"
            bg="brand.default"
          />
        </Flex>
       
      )}
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent bg="brand.light" color="secondary.500">
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>

            <DrawerBody>
              <VStack spacing={4} alignItems={"left"}>
                <Box
                  borderLeft={"2px solid"}
                  borderColor={" secondary.200"}
                  pl={25}
                >
                  <Link to={"/nosotros"}>Sobre Nosotros</Link>
                </Box>
                {/* <Box
                  borderLeft={"2px solid"}
                  borderColor={" secondary.200"}
                  pl={25}
                >
                  <Link to={"/room"}>Habitaciones</Link>
                </Box> */}

                <Box
                  borderLeft={"2px solid"}
                  borderColor={" secondary.200"}
                  pl={25}
                >
                  <Link to={"/interes"}>Sitios de Interes</Link>
                </Box>

                <Button>
                  <Link to={"/consulta"}>Consulta</Link>
                </Button>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Box>
  );
};
