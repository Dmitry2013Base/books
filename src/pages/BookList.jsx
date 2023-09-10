import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getBooks, setStartIndex } from '../redux/Actions';
import Book from '../components/Book';
import Loader from '../components/Loader';
import CustomButton from '../components/CustomButton';
import '../styles/book.css'

const BookList = () => {

    const booksReduser = useSelector(state => state.BooksReduser);
    const searchReduser = useSelector(state => state.SearchReduser);
    const loader = useSelector(state => state.LoaderReduser);
    const books = booksReduser.books;
    const [isLoadMore, setIsLoadMore] = useState(true);
    const dispatch = useDispatch();
    // eslint-disable-next-line
    useEffect(() => { (booksReduser.books.length === 0) && dispatch(getBooks(searchReduser)) },[]);

    function downloadMore() {
        var startIndex = searchReduser.startIndex + searchReduser.maxResults;
        
        if (booksReduser.booksCount > startIndex) {
            dispatch(getBooks({...searchReduser, startIndex}, true));
            dispatch(setStartIndex(startIndex));
            setIsLoadMore(true);
        } else {
            setIsLoadMore(false);
        }
    }

    return (
        <>
            <Loader/>
            {
                (loader.visibleContent) && 
                <>
                    <div className='books-count'>Found {booksReduser.booksCount} results</div>
                    <div className='list'>
                        <div className='book-list'>
                            {
                                (books.length) ? books.map((book, index) => <Book key={index} book={book}/>) : <></>
                            }
                        </div>
                        {
                            (isLoadMore && books.length) 
                            ? <div className='load-more'>
                                <CustomButton onClick={downloadMore}>Load more</CustomButton>
                            </div>
                            : <></>
                        }
                    </div>
                </>
            }
        </>
    );
}

export default BookList;
