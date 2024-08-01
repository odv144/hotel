import { Carousel } from "./Carousel"


export const Banner = () => {
  
  const slides = [
    {
      image: '/img/banner1.png',
      title: 'Descubre el oasis que buscabas',
      buttonText: 'Reservar'
    },
    {
      image: '/img/banner2.png',
      title: 'Vive experiencias inolvidables',
      buttonText: 'Reservar'
    },
    {
      image: '/img/banner3.png',
      title: 'Disfruta de tu tiempo',
      buttonText: 'Reservar'
    }, 
  ];

  return (
        <Carousel slides={slides}/>
  )
}
