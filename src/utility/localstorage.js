
const getStoredReadBooks=()=>{
    const storedReadBooks=localStorage.getItem('read-books')
    if(storedReadBooks){
        return JSON.parse(storedReadBooks);
    }
    return [];

}

const saveReadBooks=book=>{
    const storedReadBooks=getStoredReadBooks();
    const exists=storedReadBooks.find(b=>b.bookId===book.bookId)
    if(!exists){
        storedReadBooks.push(book)
        localStorage.setItem('read-books',JSON.stringify(storedReadBooks))
    }
}

const getStoredWishlistBooks=()=>{
    const wishlistBooks=localStorage.getItem('wishlist-books')
    if(wishlistBooks){
        return JSON.parse(wishlistBooks)
    }
    return [];
}

const saveWishListBooks=book=>{
    const storedWishlistBooks=getStoredWishlistBooks();
    const existsWishlist=storedWishlistBooks.find(b=>b.bookId===book.bookId)
    if(!existsWishlist){
        storedWishlistBooks.push(book)
        localStorage.setItem('wishlist-books',JSON.stringify(storedWishlistBooks))
    }
}
export{getStoredReadBooks,saveReadBooks,getStoredWishlistBooks,saveWishListBooks}