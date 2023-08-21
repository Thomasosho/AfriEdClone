import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'
import { AppProvider } from '../context'

const Home = () => {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  )
}

export default Home