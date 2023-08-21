import Cocktail from './Cocktail'
import Magarita from '../assets/magarita.jpeg'
import Martini from '../assets/martini.webp'
import Pina from '../assets/PiñaColada.jpeg'

const CocktailList = () => {
  const cocktails = [
    {
      id: 1,
      name: "Margarita",
      image: {Magarita},
      info: "A classic cocktail made with tequila, lime juice, and orange liqueur.",
      glass: "Margarita glass"
    },
    {
      id: 2,
      name: "Martini",
      image: {Martini},
      info: "An elegant cocktail made with gin or vodka and vermouth, typically garnished with an olive or a twist of lemon.",
      glass: "Martini glass"
    },
    {
      id: 3,
      name: "Pina Colada",
      image: {Pina},
      info: "A tropical cocktail made with rum, coconut cream, and pineapple juice.",
      glass: "Hurricane glass"
    },
  ];

  console.log( cocktails );

  if (cocktails.length < 1){
    return (
      <h1 className='section-title'>no cocktails match your search criterial</h1>
    )
  }
  return (
    <section className='section'>
      <h2 className='section-title'>
        cocktails
      </h2>
      <div className='cocktails-center'>
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default CocktailList