import Magarita from '../src/assets/magarita.jpeg'
import Martini from '../src/assets/martini.webp'
import Pina from '../src/assets/PiñaColada.jpeg'

const cocktails = [
  {
    id: 1,
    name: "Margarita",
    image: Magarita,
    info: "A classic cocktail made with tequila, lime juice, and orange liqueur.",
    glass: "Margarita glass",
  },
  {
    id: 2,
    name: "Martini",
    image: Martini,
    info: "An elegant cocktail made with gin or vodka and vermouth, typically garnished with an olive or a twist of lemon.",
    glass: "Martini glass",
  },
  {
    id: 3,
    name: "Pina Colada",
    image: Pina,
    info: "A tropical cocktail made with rum, coconut cream, and pineapple juice.",
    glass: "Hurricane glass",
  },
];

export default cocktails;
