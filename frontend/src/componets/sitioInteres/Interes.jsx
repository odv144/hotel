import {
  AspectRatio,
  Box,
  Button,
  Center,
  Image,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { Link } from "react-router-dom";
import InteresCard from "./InteresCard";
export const Interes = () => {
  const sitio =[
    {
      id:1,
      url:'/img/vinos.jpeg',
      desc:"Recorre la Ruta del Vino, un circuito que te llevará por viñedos centenarios, bodegas boutique y restaurantes gourmet donde podrás degustar los mejores Malbec, Cabernet Sauvignon y otras variedades de uva. Disfruta de paisajes impresionantes y descubre la historia y tradición vitivinícola de la región en cada parada."
    },
    {
      id:2,
      url:'/img/parque.jpeg',
      desc: "Parque General San Martín: Este es el pulmón verde de la ciudad y el lugar ideal para relajarse y disfrutar de la naturaleza. Aquí puedes caminar, andar en bicicleta, hacer un picnic o simplemente leer un libro bajo la sombra de un árbol. El parque también alberga varios museos y teatros, ofreciéndote la oportunidad de explorar."
    },
    {
      id:3,
      url:'/img/ciclismo.jpeg',
      desc:"Este es un paseo en bicicleta único que te permite recorrer los viñedos y bodegas de Maipú, una de las zonas vitivinícolas más importantes de Mendoza. El Bicitren consiste en dos bicicletas adaptadas a las vías del tren que llevan a un grupo de turistas a través de los viñedos. Durante el recorrido, un guía te irá explicando la historia y la cultura del vino en Mendoza."
    },
    {
      id:4,
      url:'/img/ciclismo.jpeg',
      desc:"Aconcagua: El Aconcagua es la montaña más alta de América y un desafío para cualquier alpinista. Si te atreves a escalarla, te esperan unas vistas increíbles y una experiencia inolvidable. La ascensión no solo pondrá a prueba tus habilidades, sino que también te permitirá conectarte profundamente con la majestuosidad y la belleza natural de esta imponente cumbre."
    }
    
    
    
    
  ]

  
  return (
    <>
      <Header />
      <Center as="main">
        <Box as="section" color={"neutral.950"}>
          <AspectRatio maxW="100%" ratio={2}>
            <iframe
              title="video institucional"
              src="https://fast.wistia.net/embed/iframe/icpjcp6mm8"
              allowFullScreen
            />
          </AspectRatio>

          <Box px={"3.5em"} py={"4.5em"} color={"neutral.900"}>
            <Text
              fontWeight={400}
              fontSize={"2.8em"}
              lineHeight={"116%"}
              mb={5}
            >
              Mendoza
            </Text>
            <Text overflow={"hidden"} fontSize={"1.3em"}>
              Mendoza te invita a sumergirte en un mundo de vinos excepcionales,
              paisajes deslumbrantes y experiencias inolvidables. A continuación
              te mostramos los sitios de mas interés y las mejores actividades
              que podrás hacer durante tu visita a Mendoza.
            </Text>

    
            <Wrap justify={"space-between"} textAlign={"left"} flexWrap={'wrap'}>
               {sitio.map((place)=>
              <InteresCard key={place.id} url={place.url} desc={place.desc}/>
              )}
              
      
            </Wrap>
          </Box>
        </Box>
      </Center>
      <Center>
        <Button mb={2} variant={"filled"} marginBottom={4}>
          <Link to={"/consulta"}>Consultar</Link>
        </Button>
      </Center>
      <Footer />
    </>
  );
};
