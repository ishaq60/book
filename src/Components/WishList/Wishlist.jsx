
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBooks } from "../../utility/localstorage";


const Wishlist = () => {
    const books=useLoaderData();

    const[readBooks,setReadBooks]=useState([]);

    useEffect(()=>{
        const storedReadIds=getStoredReadBooks();
        if(books.length>0){
            // const booksRead=books.filter(book=>storedReadIds.includes(book.bookId))


            const booksRead=[];
            for(const bookId of storedReadIds){
                const book=books.find(book=>book.id===bookId)
                if(book){
                    booksRead.push(bookId)
                }
            }
            setReadBooks(booksRead)
        }
        
    },[])
    return (
        <div>Wishlisted: {readBooks.length}</div>
    );
};

export default Wishlist;