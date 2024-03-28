import { useEffect, useState } from "react";
import { getStoredWishlistBooks } from "../../utility/localstorage";
import WishListCard from "./WishListCard";

const Wishlist = () => {
    const [wishList,setWishList]=useState([])
    useEffect(()=>{
        const storedWishListBooks=getStoredWishlistBooks()
        setWishList(storedWishListBooks)
    },[])
    return (
        <div>
            {
                wishList.map(book=><WishListCard key={book.bookId} book={book}></WishListCard>)
            }
        </div>
    );
};

export default Wishlist;