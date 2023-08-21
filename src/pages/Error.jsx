import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section>
      <div className='error-container'>
        <h1>Oops! It is a dead end</h1>
        <Link to='/' className='btn btn-primary'>
          Back home
        </Link>
      </div>
    </section>
  )
}

export default Error