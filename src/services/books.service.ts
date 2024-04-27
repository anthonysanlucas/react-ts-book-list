import { BookObject } from '@/types'
import { config } from './config'

interface BookResponse {
  default: {
    library: BookObject[]
  }
}

const { getBooksURL } = config

export const getBooks = async (): Promise<BookObject[]> => {
  const response = await fetch(getBooksURL)

  if (!response.ok) {
    throw new Error(`Error fetching books: ${response.statusText}`)
  }

  const data: BookResponse = await response.json()

  console.log(data.default.library)

  return data?.default?.library
}
