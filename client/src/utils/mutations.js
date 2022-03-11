import { gql } from '@apollo/client'

export const MUTATION_LOGIN = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token 
    user{
      _id
      username
      email
    }
  }
}
`;

export const MUTATION_ADDUSER = gql`
mutation addUser($username: String!, $email: String!, $password: String!){
  addUser(username: $username, email: $email, password: $password){
    token, 
    user{
      _id
      username
      email
    }
  }
}
`;

export const MUTATION_SAVEBOOK = gql`
mutation savebooks($authors:[String], $description: String!, $bookId: String!, $image: String, $link: String, $title: String!) {
  saveBook(authors: $authors, description: $description, bookId: $bookId, image: $image, link: $link, title: $title){
    _id
    username
    bookcount
    savedBooks {
      _id
      bookId
      authors
      description
      title
      image
      link
    }
  }
}
`;

export const MUTATION_REMOVEBOOK = gql`
mutation ($bookId: String!) {
  removeBook(bookId: $bookId) {
    _id
    username
    bookcount
    savedBooks {
      _id
      bookId
      title
    }
  }
}
`;