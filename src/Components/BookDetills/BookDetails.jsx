import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const books=useLoaderData();
    const {bookId}=useParams()
    const bookIdInt=parseInt(bookId)
    const book=books.find(book=>book.bookId === bookIdInt)
    console.log(book)
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
                        <div className="flex items-center gap-8">
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
                        <button className="px-7 py-3 border border-black rounded-md font-bold">Read</button>
                        <button className="px-7 py-3 bg-[#50B1C9] rounded-md text-white font-bold">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;