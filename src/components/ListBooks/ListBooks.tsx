import {FiBookOpen, FiUser, FiLink} from 'react-icons/fi'

import './ListBooks.css'

interface ListBooksProps{
  books: Array<Book>;
  hasContent: Boolean;
}

interface Book{
  author: string;
  title: string;
  url: string
}

function ListBooks({ books, hasContent}: ListBooksProps) {
  return (
    <div className="content">
          {books.length ? books?.map((livro: Book, key: number) => (
            <div className="livros" key={key}>
              <div>
                <FiUser size={26} className="icon"/> <span>{livro.author}</span>
              </div> 
              <div>
                <FiBookOpen size={26} className="icon"/> <span>{livro.title ? livro.title : "Não Informado"}</span>
              </div>
              <div>
                <FiLink size={26} className="icon"/> <span>
                        {livro.url ? 
                            <a href={livro.url} 
                                rel="noreferrer" 
                                target="_blank"> {livro.url} </a> 
                            : 
                            "Não informado"
                        }
                </span>
              </div>
          </div>)) : (<p className="hasContent">{hasContent ? "Procurando..." : "Sem conteúdo"}</p>) }
        </div>
  )
}

export default ListBooks