import {useState, useEffect} from 'react'
import api from "../../_config/api"
import Searcher from '../../components/Searcher'

import "./Biblioteca.css"
import ListBooks from '../../components/ListBooks'

function Biblioteca() {

  const [books, setBooks] = useState([])
  const [value, setValue] = useState('')
  const [hasContent, setHasContent] = useState(true)

  useEffect(() => {
    async function fetchData(){

      setBooks([])
      
      const response = await api.get('/search?query=' + value)

      const content = response.data.hits.length

      if(!content){
        setHasContent(false)
      }

      setBooks(response.data.hits)
    }

    fetchData()
  }, [value])

  return (
    <div className="biblioteca">
      <header>
        <h1>Biblioteca</h1>

        <Searcher setValue={setValue}/>
      </header>

      <main>
        <ListBooks books={books} hasContent={hasContent}/>
      </main>
    </div>
  )
}

export default Biblioteca