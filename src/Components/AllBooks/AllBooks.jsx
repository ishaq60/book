import PropTypes from 'prop-types';
const AllBooks = ({book}) => {
    const {bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing}=book;
    return (
        <div>
            
        </div>
    );
};
AllBooks.propTypes={
    book: PropTypes.object,
}

export default AllBooks;