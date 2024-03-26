import { useEffect, useState } from "react";
import AllBooks from "../AllBooks/AllBooks";
const ListedBooks1 = () => {

    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div>
            <div className="container mx-auto bg-slate-200 rounded-xl text-center py-8">
                <h1 className="text-2xl font-bold">Books</h1>
            </div>
            <div className="p-4 rounded text-center">
                <select className="bg-green-200 px-4 py-2 rounded">   
                    <option value="">Sort By</option>
                    <option value="option1">Rating</option>
                    <option value="option2">Number of pages</option>
                    <option value="option3">Publisher Year</option>
                </select>
            </div>
            <div className="flex gap-10">
                <button>Read Books</button>
                <button>Wishlist Books</button>
            </div>
            <div>
                {
                    books.map(book=><AllBooks key={book.bookId} book={book}></AllBooks>)
                }
            </div> 
        </div>
        
    );
};

export default ListedBooks1;