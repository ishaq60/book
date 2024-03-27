import {createBrowserRouter} from 'react-router-dom'
import Root from '../Components/Root/Root';
import NotFound from '../Components/NotFound/NotFound';
import Home from '../Components/Home/Home';
import ListedBooks from '../Components/ListedBooks/ListedBooks';
import PageToRead from '../Components/PageToRead/PageToRead';
import Blog from '../Components/Blog/Blog';
import AboutUs from '../Components/AboutUs/AboutUs';
import BookDetails from '../Components/BookDetills/BookDetails';
import ReadList from '../Components/ListedBooks1/ReadList/ReadList';
import Wishlist from '../Components/WishList/Wishlist';
export const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      errorElement:<NotFound></NotFound>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
        },
        {
          path:'/listedBooks',
          element:<ListedBooks></ListedBooks>,
          children:[
            {
                index:true,
                element:<ReadList></ReadList>
            },
            {
                path:'wishlist',
                element:<Wishlist></Wishlist>
            }
          ]
        },
        {
          path:'/pageToRead',
          element:<PageToRead></PageToRead>,
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/aboutUs',
          element:<AboutUs></AboutUs>
        },
        {
          path:'/book/:bookId',
          element:<BookDetails></BookDetails>,
          loader:()=>fetch('../books.json')
        },
      ]
    },
  ]);