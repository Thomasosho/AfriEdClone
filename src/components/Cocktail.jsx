import { Link } from 'react-router-dom'

const Cocktail = ({image, name, id, info, glass}) => {
  console.log('Image', Object.values(image));
  // const []
  return (
    <article className='cocktail'>
     <div className='img-container'>
      <img src={image} alt={name} />
     </div>
     <div className='cocktail-footer'>
       <h3>{name}</h3>
       <h4>{glass}</h4>
       <p>{info}</p>
       <Link className='btn btn-primary'>
         details
       </Link>
     </div>
    </article>
  )
}

export default Cocktail