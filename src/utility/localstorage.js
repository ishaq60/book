const getStoredReadBooks = () => {
    const storedReadBooks = localStorage.getItem('readBooks');
    if (storedReadBooks) {
        return JSON.parse(storedReadBooks);
    }
    return [];
}

const saveReadBooks = (book) => {
    const readBooks = JSON.parse(localStorage.getItem('readBooks')) || [];
    readBooks.push(book);
    localStorage.setItem('readBooks', JSON.stringify(readBooks));
};

const getStoredWishlistBooks = () => {
    const storedWishlistBooks = localStorage.getItem('wishListBooks');
    if (storedWishlistBooks) {
        return JSON.parse(storedWishlistBooks);
    }
    return [];
}

const saveWishListBooks = (book) => {
    const wishListBooks = JSON.parse(localStorage.getItem('wishListBooks')) || [];
    wishListBooks.push(book);
    localStorage.setItem('wishListBooks', JSON.stringify(wishListBooks));
};

export { getStoredReadBooks, saveReadBooks, getStoredWishlistBooks, saveWishListBooks };
