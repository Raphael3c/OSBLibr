import {FiSearch} from 'react-icons/fi'

import './Searcher.css'

interface SearcherProps{
  setValue: React.Dispatch<React.SetStateAction<string>>
}

function Searcher({ setValue }: SearcherProps) {

  function search(){
    const input = document.getElementById("value") as HTMLInputElement
    setValue(input.value)
  }

  return (
    <>
        <div>
          <input type="text" id="value"/>
          <button><FiSearch size={35} color="white" onClick={search}/></button>
        </div>
    </>
  )
}

export default Searcher