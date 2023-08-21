import Cocktail from './Cocktail'
import Loading from './Loading'
import { useState } from 'react'

const CocktailList = () => {
  // const {loading, cocktails} = useGlobalContext()
  const [loading, setLoading] = useState(false);
  const [cocktails, setCocktails] = useState([]);
  // console.log( cocktails );

  if(loading) {
    return <Loading />
  }
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