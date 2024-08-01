import { Flex, Img, useBreakpointValue } from "@chakra-ui/react"
import { Link } from "react-router-dom"


const Header = () => {
  const imgUrl = useBreakpointValue({
    base: "/img/logo2linea.svg",
    md: "/img/logo1linea.svg",
  });
  return (
    <Flex justify={'center'} h="100px" bg='primary.500'pt={2}>
    <Link to="/admin/home">
      <Img src={imgUrl} alt="logo" width={"250px"} />
    </Link>
  </Flex>
  )
}

export default Header