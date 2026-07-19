import React from "react";

function BookDetails() {

    const books = [

        {
            id:1,
            title:"Spring Boot",
            author:"Rod Johnson"
        },

        {
            id:2,
            title:"React",
            author:"Jordan Walke"
        },

        {
            id:3,
            title:"Java",
            author:"James Gosling"
        }

    ];

    return(

        <div>

            <h2>Book Details</h2>

            <ul>

                {

                    books.map(book=>

                        <li key={book.id}>

                            {book.title} - {book.author}

                        </li>

                    )

                }

            </ul>

        </div>

    );

}

export default BookDetails;