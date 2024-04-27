import { BookObject } from '@/types'
import React, { createContext, ReactNode, useContext, useState } from 'react'

export interface BookListContextData {
  booksContext: BookObject[]
  setBooksContext: React.Dispatch<BookObject[]>
}

export const BookListContext = createContext({} as BookListContextData)

export function BookListContextProvider({ children }: { children: ReactNode }) {
  const [booksContext, setBooksContext] = useState<BookObject[]>()

  const data = {
    booksContext,
    setBooksContext
  }

  return (
    <BookListContext.Provider value={data as unknown as BookListContextData}>
      {children}
    </BookListContext.Provider>
  )
}

export const useBookListContext = () => {
  const BooksContext = useContext(BookListContext)

  if (!BooksContext) {
    throw new Error('useBookListContext must be used within a BookListContextProvider')
  }

  return BooksContext
}
