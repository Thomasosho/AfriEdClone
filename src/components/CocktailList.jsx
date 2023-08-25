import Cocktail from './Cocktail'
import cocktails from '../../constant/data'

const CocktailList = () => {

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