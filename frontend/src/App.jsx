
import { Footer } from "./componets/footer/Footer";
import { About } from "./componets/about/About";
import { Header } from "./componets/header/Header";
import { Room } from "./componets/room/Room";
import { Banner } from "./componets/banner/Banner";
import { Service } from "./componets/service/Service";
import { Flex } from "@chakra-ui/react";


function App() {
  return (
    <Flex minW={"300px"} width={["100","100","95","90","90"]} flexDir={"column"}>
    
      <Header />
      <Banner/>
      <About />
      <Room />
      <Service/>
      <Footer />
      
    </Flex>
  );
}

export default App;
