import SliderCharacterBox from "./SliderCharacterBox";
import SliderAreaBox from './SliderAreaBox'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import "./style.css";
const character = [
    {
      id: 1,
      src: "assets/images/characters/character0.png",
      alt: "Placeholder image",
    },
    {
      id: 2,
      src: "assets/images/characters/character1.png",
      alt: "Placeholder image",
    },
    {
      id: 3,
      src: "assets/images/characters/character2.png",
      alt: "Placeholder image",
    },
    {
      id: 4,
      src: "assets/images/characters/character3.png",
      alt: "Placeholder image",
    },
    {
      id: 5,
      src: "assets/images/characters/character4.png",
      alt: "Placeholder image",
    }
  ];

  const area = [
    {
      id: 1,
      src: "assets/images/area/tcg/0.png",
      alt: "Placeholder image",
    },
    {
      id: 2,
      src: "assets/images/area/tcg/1.png",
      alt: "Placeholder image",
    },
    {
      id: 3,
      src: "assets/images/area/tcg/2.png",
      alt: "Placeholder image",
    },
    {
      id: 4,
      src: "assets/images/area/tcg/3.png",
      alt: "Placeholder image",
    },
    {
      id: 5,
      src: "assets/images/area/tcg/4.png",
      alt: "Placeholder image",
    }
  ];


  const Index =({id}) =>{
    return(<>{id ==='character' ?
         <SliderCharacterBox id ={id} images={character} slidesToShow={5} />
    :<SliderAreaBox images={area} slidesToShow={5} />
    }</>)
  }
  export default Index