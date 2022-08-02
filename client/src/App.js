
import React, { Component } from 'react'
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import Booklist from './components/BookList';
import AddBook from './components/AddBook';



const client = new ApolloClient({
  uri:'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
})
class App extends Component {
  render() {
    return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Hello Guest</h1>
        <Booklist />
        <AddBook />
      </div>
    </ApolloProvider>
    )
  }
}


export default App;
