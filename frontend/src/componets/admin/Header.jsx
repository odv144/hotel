import { Button, Flex, Img, useBreakpointValue } from "@chakra-ui/react"
import { useContext } from "react";
import { Link } from "react-router-dom"
import { UsuarioContext } from "../../context/UsuarioContext";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();  
  const {logout} = useContext(UsuarioContext)
  const closeSession=()=>{
    logout();
  //  navigate('/');
  }
  const imgUrl = useBreakpointValue({
    base: "/img/logo2linea.svg",
    md: "/img/logo1linea.svg",
  });
  return (
    <Flex justify={'space-around'} h="100px" bg='primary.500'pt={2}>
    <Link to="/admin/home">
      <Img src={imgUrl} alt="logo"  />
    </Link>
    <Button 
    bgColor={'secondary.500'}
     w={'100px'} 
     mx={'10px'} 
     onClick={closeSession}
     >Logout</Button>

  </Flex>
  )
}

export default Header