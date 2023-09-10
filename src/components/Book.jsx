import { useNavigate } from 'react-router';

const Book = ({ book }) => {
    const navigate = useNavigate();
    return (
        <div className='card' onClick={() => navigate(`../book/${book.id}`)}>
            <img className='book-image' src={(book.volumeInfo.imageLinks) && book.volumeInfo.imageLinks.smallThumbnail} alt="card"></img>
            <div className='book-params'>
                <p className='book-name'>{book.volumeInfo.title}</p>
                <p className='book-authors'>{(book.volumeInfo.authors) && book.volumeInfo.authors.join(', ')}</p>
                <p className='book-category'>{(book.volumeInfo.categories) && book.volumeInfo.categories[0]}</p>
            </div>
        </div>
    );
}

export default Book;
