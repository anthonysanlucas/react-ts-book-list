import { FC, useEffect, useState } from 'react'
import { BookObject } from '@/types'
import FilterSection from './FilterSection'
import BookSection from './BookSection'

interface Props {
  books: BookObject[]
}

const BookList: FC<Props> = ({ books }) => {
  const [filteredBooks, setFilteredBooks] = useState<BookObject[]>(books)
  const [allGenres, setAllGenres] = useState<string[]>([])
  const [allAuthors, setAllAuthors] = useState<string[]>([])
  const [searchBookTitle, setSearchBookTitle] = useState<string>('')
  const [selectedGenre, setSelectedGenre] = useState<string>('all')
  const [selectedAuthor, setSelectedAuthor] = useState<string>('all')

  useEffect(() => {
    setFilteredBooks(books)

    books.forEach(({ book }) => {
      setAllGenres(prev => [...prev, book.genre])
      setAllAuthors(prev => [...prev, book.author.name])
    })
  }, [books])

  useEffect(() => {
    const filteredBooks = books.filter(({ book }) => {
      const isGenreMatch = selectedGenre === 'all' || book.genre === selectedGenre
      const isAuthorMatch = selectedAuthor === 'all' || book.author.name === selectedAuthor
      const isTitleMatch = book.title.toLowerCase().includes(searchBookTitle.toLowerCase())

      return isGenreMatch && isAuthorMatch && isTitleMatch
    })

    setFilteredBooks(filteredBooks)
  }, [books, searchBookTitle, selectedGenre, selectedAuthor])

  return (
    <>
      <header>
        <FilterSection
          allGenres={allGenres}
          allAuthors={allAuthors}
          selectedGenre={selectedGenre}
          selectedAuthor={selectedAuthor}
          setSearchBookTitle={setSearchBookTitle}
          setSelectedGenre={setSelectedGenre}
          setSelectedAuthor={setSelectedAuthor}
        />
      </header>
      <BookSection filteredBooks={filteredBooks} />
    </>
  )
}

export default BookList
