import { useCallback, useEffect, useState } from "react";
import { Box, Button, Text, Image, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { RoomModal } from "../room/RoomModal";
import { Link } from "react-router-dom";

export const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(intervalId);
  }, [nextSlide]);

  return (
    <Box position="relative" height={["70vh","80vh"]} overflow="hidden">
      <motion.div
        key={currentSlide}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={slides[currentSlide].image}
          alt={`Slide ${currentSlide + 1}`}
          objectFit="cover"
          w="100%"
          h="80vh"
        />
        <Box
          display="flex"
          flexDir={"column"}
          position="absolute"
          top="40%"
          left="5%"
          //  transform="translate(5%, 5%)"

          color="white"
        >
          <Text
          w={'65%'}
          fontSize={["2.1em","3.5em"]}
          textShadow={'2px 2px 2px #909090'}
          fontWeight="700" 
           mb={4}
           lineHeight={'150%'}
           letterSpacing={'0.25px'}
           >
            {slides[currentSlide].title}
          </Text>
          <Button variant={"filled"} >
            <Link to="/consulta">{slides[currentSlide].buttonText}</Link>
          </Button>
        </Box>
      </motion.div>
      <Flex position="absolute" bottom="20px" width="100%" justify="center">
        {slides.map((_, index) => (
          <Box
            key={index}
            as="button"
            bg={currentSlide === index ? "white" : "whiteAlpha.400"}
            w="30px"
            h="4px"
            // borderRadius="50%"
            mx="2px"
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </Flex>
      {/* <Button position="absolute" left="10px" top="85%" onClick={prevSlide}>
        &#8249;
      </Button>
      <Button position="absolute" right="10px" top="85%" onClick={nextSlide}>
        &#8250;
      </Button> */}
    </Box>
  );
};
