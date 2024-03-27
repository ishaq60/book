const getStoredReadBooks=()=>{
    const storedReadBooks=localStorage.getItem('read-books')
    if(storedReadBooks){
        return JSON.parse(storedReadBooks);

    }
    return [];

}

const saveReadBooks=bookId=>{
    const storedReadBooks=getStoredReadBooks();
    const exists=storedReadBooks.find(id=>id===bookId)
    if(!exists){
        storedReadBooks.push(bookId)
        localStorage.setItem('read-books',JSON.stringify(storedReadBooks))
    }
    else{
        alert('Already selected')
    }
}

const getStoredWishlistBooks=()=>{
    const wishlistBooks=localStorage.getItem('wishlist-books')
    if(wishlistBooks){
        return JSON.parse(wishlistBooks)
    }
    return [];
}

const saveWishListBooks=bookId=>{
    const storedWishlistBooks=getStoredWishlistBooks();
    const existsWishlist=storedWishlistBooks.find(id=>id===bookId)
    if(!existsWishlist){
        storedWishlistBooks.push(bookId)
        localStorage.setItem('wishlist-books',JSON.stringify(storedWishlistBooks))
    }
}
export{getStoredReadBooks,saveReadBooks,getStoredWishlistBooks,saveWishListBooks}