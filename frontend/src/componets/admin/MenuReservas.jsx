import { Box, Flex } from "@chakra-ui/react";

// Componente del Menú
export const MenuReservas = ({setFiltro,filtro}) => {
  
    return (
        <Flex
            flexDirection="column"
            alignItems="flex-start"
            padding="10px"
            gap="10px"
            width="395px"
            height="80px"
            bg="#CEC9C9"
            
            boxShadow="0px 6px 58px rgba(196, 203, 214, 0.103611)"
        >
            {/* Items del Menú */}
            <Flex
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                padding="10px"
                gap="10px"
                width="375px"
                height="60px"
                borderBottom="1px solid rgba(93, 135, 168, 0.5)"
            >
                {/* Item 1 */}
                <Box
                    width="88.75px"
                    height="40px"
                    position="relative"
                >
                    {/* underline */}
                    <Box
                        position="absolute"
                        left="0"
                        right="0"
                        top="95%"
                        height="2px"
                        bg={filtro==='all'?"#172635":'white'}
                    />
                    {/* Label */}
                    <Box
                        position="absolute"
                        left="30.06%"
                        right="28.25%"
                        top="25%"
                        bottom="30%"
                        fontFamily="Open Sans"
                        fontWeight="700"
                        fontSize="13px"
                        lineHeight="18px"
                        display="flex"
                        alignItems="flex-end"
                        textAlign="center"
                        letterSpacing="-0.02em"
                        textTransform="capitalize"
                        color="#172635"
                        cursor={'pointer'}
                        onClick={()=>setFiltro('all')}
                    >
                        Todas
                    </Box>
                </Box>

                {/* Item 2 */}
                <Box
                    width="88.75px"
                    height="40px"
                    position="relative"
                >
                    {/* underline */}
                    <Box
                        position="absolute"
                        left="0"
                        right="0"
                        top="95%"
                        height="2px"
                        bg={filtro==='A'?"#172635":'white'}
                    />
                    {/* Label */}
                    <Box
                        position="absolute"
                        left="8.5%"
                        right="6.99%"
                        top="25%"
                        bottom="30%"
                        fontFamily="Open Sans"
                        fontWeight="400"
                        fontSize="13px"
                        lineHeight="18px"
                        display="flex"
                        alignItems="flex-end"
                        textAlign="center"
                        letterSpacing="-0.02em"
                        textTransform="capitalize"
                        color="#172635"
                        opacity="0.7"
                        cursor={'pointer'}
                        onClick={()=>setFiltro('A')}
                    >
                        Confirmadas
                    </Box>
                </Box>

                {/* Item 3 */}
                <Box
                    width="88.75px"
                    height="40px"
                    position="relative"
                >
                    {/* underline */}
                    <Box
                        position="absolute"
                        left="0"
                        right="0"
                        top="95%"
                        height="2px"
                        bg={filtro==='R'?"#172635":'white'}
                    />
                    {/* Label */}
                    <Box
                        position="absolute"
                        left="4.2%"
                        right="2.28%"
                        top="25%"
                        bottom="30%"
                        fontFamily="Open Sans"
                        fontWeight="400"
                        fontSize="13px"
                        lineHeight="18px"
                        display="flex"
                        alignItems="flex-end"
                        textAlign="center"
                        letterSpacing="-0.02em"
                        textTransform="capitalize"
                        color="#172635"
                        opacity="0.7"
                        cursor={'pointer'}
                        onClick={()=>setFiltro('R')}
                    >
                       Reservadas
                    </Box>
                </Box>

                {/* Item 4 */}
                <Box
                    width="88.75px"
                    height="40px"
                    position="relative"
                >
                    {/* underline */}
                    <Box
                        position="absolute"
                        left="0"
                        right="0"
                        top="95%"
                        height="2px"
                        bg={filtro==='C'?"#172635":'white'}
                    />
                    {/* Label */}
                    <Box
                        position="absolute"
                        left="12.8%"
                        right="11.71%"
                        top="25%"
                        bottom="30%"
                        fontFamily="Open Sans"
                        fontWeight="400"
                        fontSize="13px"
                        lineHeight="18px"
                        display="flex"
                        alignItems="flex-end"
                        textAlign="center"
                        letterSpacing="-0.02em"
                        textTransform="capitalize"
                        color="#172635"
                        opacity="0.7"
                        cursor={'pointer'}
                        onClick={()=>setFiltro('C')}
                    >
                        Canceladas
                    </Box>
                </Box>
            </Flex>
        </Flex>
    );
};