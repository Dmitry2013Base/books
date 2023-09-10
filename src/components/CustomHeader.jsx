import SearchForm from "./SearchForm";
import '../styles/header.css'

const CustomHeader = () => {
    return(
        <header className="header">
            <h3>Search for books</h3>
            <SearchForm isRedirect={true}/>
        </header>
    );
}

export default CustomHeader;
