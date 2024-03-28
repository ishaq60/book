// import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { getStoredReadBooks } from "../../../utility/localstorage";
import AllBooks from "../../AllBooks/AllBooks";
const ReadList = () => {
    const [books,setBooks]=useState([])
    useEffect(()=>{
        const storedBooks=getStoredReadBooks()
        setBooks(storedBooks)
    },[])

    return (
        <div>
            {
                books.map(book=>(<AllBooks key={book.bookId} book={book}></AllBooks>))
            }
        </div>
    );
};


export default ReadList;