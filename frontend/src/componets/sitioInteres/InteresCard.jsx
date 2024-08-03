import { Image, Text, Wrap, WrapItem } from "@chakra-ui/react"


const InteresCard = ({url,desc}) => {
  return (
    <WrapItem w={["100", "45%"]} flexDir={"column"} mt={"6em"} minW={'350px'}>
      <Image
        bgImage={url}
        borderRadius={'16px'}
        bgSize={'cover'}
        bgRepeat={'no-repeat'}
        bgPosition={'center'}
       w='100%'
      h='320px'
      />
      <Text as="h4" color={"neutral.800"} my={"2.5em"}>
        {desc}
      </Text>
    </WrapItem>
   
  )
}

export default InteresCard