import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveReadBooks, saveWishListBooks } from "../../utility/localstorage";
import { useState } from "react";

const BookDetails = () => {
    const [alreadyRead, setAlreadyRead] = useState(false);
    const [alreadyWishlisted, setAlreadyWishlisted] = useState(false);
    const books = useLoaderData();
    const { bookId } = useParams();
    const bookIdInt = parseInt(bookId);
    const book = books.find(book => book.bookId === bookIdInt);
    console.log(book);

    const handleReadBtn = () => {
        if (!alreadyRead) {
            saveReadBooks(book);
            toast.success('You have read the book');
            setAlreadyRead(true);
        } else {
            toast.error('You have already marked this book as read');
        }
    };

    const handleWishlistBtn = () => {
        if (alreadyRead) {
            toast.error('You have already marked this book as read. You cannot wishlist it.');
        } else if (!alreadyWishlisted) {
            saveWishListBooks(book);
            toast.success('You have added this book to your wishlist');
            setAlreadyWishlisted(true);
        } else {
            toast.error('You have already wishlisted this book');
        }
    };

    return (
        <div>
            <div className="flex gap-16">
                <div className="bg-slate-100 p-32 w-[40%]">
                    <img className="h-[300px] w-[200px] w-a" src={book.image} alt="" />
                </div>
                <div>
                    <h1 className="text-4xl font-playFair mb- font-bold" >{book.bookName}</h1>
                    <p className="text-xl my-5">By: {book.author}</p>
                    <hr className="my-6"/>
                    <h2 className="text-xl">{book.category}</h2>
                    <hr className="my-6"/>
                    <p className="mb-7"><span className="font-bold">Review: </span>{book.review}</p>
                    <div className="flex gap-5 mb-7">
                        <p>Tag</p>
                        <div className="flex items-center gap-4">
                            {book.tags.map((tag, index) => (
                                <span key={index} className="inline-block border bg-green-50 text-green-600 px-2 py-1 rounded-full mr-2 mb-2 text-sm">
                                    #{tag}
                                </span>
                            ))}
                        </div>    
                    </div>
                    <hr className="mb-7"/>
                    <p>Number of Pages: <span className="font-bold">{book.totalPages}</span></p>
                    <p>Publisher: <span className="font-bold">{book.publisher}</span></p>
                    <p>Year of Publishing: <span className="font-bold">{book.yearOfPublishing}</span></p>
                    <p>Rating: <span className="font-bold">{book.rating}</span></p>
                    <div className="flex mt-10 gap-6">
                        <button onClick={handleReadBtn} className="px-7 py-3 border border-black rounded-md font-bold">Read</button>
                        <button onClick={handleWishlistBtn} className="px-7 py-3 bg-[#50B1C9] rounded-md text-white font-bold">Wishlist</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;
