import { CiStar } from "react-icons/ci";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
const Book = ({ book }) => {

    const {bookId, image,bookName,author,category,rating,tags} = book;

    return (
        <Link to={`/book/${bookId}`}><div className="card  bg-base-100 shadow-xl border border-green-200">
        <figure className="px-10 pt-10">
            <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
            <div>
                {tags.map((tag, index) => (
                    <span key={index} className="inline-block border bg-green-50 text-green-600 px-2 py-1 rounded-full mr-2 mb-2 text-sm">
                        {tag}
                    </span>
                ))}
            </div>
            <h2 className="card-title">{bookName}</h2>
            <p className="font-bold">By: {author}</p>
            <hr className="border-t-2 border-dashed border-black my-4" />
            <div className="flex justify-between">
                <p>{category}</p>
                <div className="flex items-center gap-2">
                    <p>{rating}</p>
                    <CiStar />
                </div>

            </div>
        </div>
    </div></Link>
    );
};
Book.propTypes={
    book:PropTypes.object,
}

export default Book;