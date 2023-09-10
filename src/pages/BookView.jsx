import { useEffect, createRef } from 'react';
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { getBook } from '../redux/Actions';
import Loader from '../components/Loader';


const BookView = () => {
    const { id } = useParams();
    const loader = useSelector(state => state.LoaderReduser);
    const book = useSelector(state => state.BooksReduser.book);
    const dispatch = useDispatch();
    const description = createRef();

    // eslint-disable-next-line
    useEffect(() => { dispatch(getBook(id)) },[])
    useEffect(() => { 
        if (description.current) {
            description.current.innerHTML = (book.volumeInfo.description) ? `<div>${book.volumeInfo.description}</div>` : ``;
        }
        // eslint-disable-next-line
    }, [description])

    return (
        <>
            <Loader/>
            {
                loader.visibleContent &&
                <div className='book-content'>
                    {
                        (book) && 
                        <div className='book-container'>
                            <img className='book-image' src={(book.volumeInfo.imageLinks) && book.volumeInfo.imageLinks.small.replace('http:', 'https:')} alt="card"></img>

                            <div className='book-params' style={{minWidth: '300px'}}>
                                <p className='book-name'>{book.volumeInfo.title}</p>
                                <div ref={description}></div>
                                <p className='book-authors'>{(book.volumeInfo.authors) && `Авторы: ${book.volumeInfo.authors.join(', ')}`}</p>
                                <p className='book-category'>{(book.volumeInfo.categories) && `Категории: ${book.volumeInfo.categories}`}</p>
                            </div>
                        </div>
                    }
                </div>
            }
        </>
    );
}

export default BookView;
