import React, { Component } from 'react';
import {getBookQuery} from '../queries/queries';
import { graphql} from '@apollo/client/react/hoc';


class BookDetails extends Component {
  
    displayBookDetails() {
        const {book}=this.props.data;
        if(book){
            return(
                <div>
                    <h2>{book.name}</h2>
                    <p>{book.genre}</p>
                    <p>{book.author.name}</p>
                    <p>All books by this Author:</p>
                    <ul className="Other-books">
                        {
                            book.author.books.map(item => {
                                return <li key={item.id}>{item.name}</li>
                            })
                        }
                    </ul>
                </div>
            );
        }else{
            return(
                <div>No book selected...</div>
            )
        }
    }
    render(){
        return (
            <div id="book-details">
              {this.displayBookDetails()}
            </div>
          );
        }

    }

export default graphql(getBookQuery, {
    options:(props) => {
        return {
            variables:{
                id:props.bookid
            }
        }
    }
})(BookDetails)