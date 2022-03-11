import { gql } from '@apollo/client'

export const QUERY_ME = gql`
query me{
  me {
    _id
    username
    email
    bookcount
    savedBooks {
      _id
      bookId
      title
      description
      image
      link
      authors
    }
  }
}
`;