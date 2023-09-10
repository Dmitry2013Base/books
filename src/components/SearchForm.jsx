import { useSelector, useDispatch } from "react-redux";
import { getBooks, setCategory, setOrderBy, setSeaechQuery, setStartIndex } from '../redux/Actions';
import Select from '../components/Select';
import CustomButton from "./CustomButton";
import { useLocation, useNavigate } from "react-router-dom";


const SearchForm = ({isRedirect}) => {
    const reduser = useSelector(state => state.SearchReduser);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function search(e) {
      e.preventDefault();
      (isRedirect && location.key !== 'default') && navigate(-1);
      dispatch(setStartIndex(0));
      dispatch(getBooks(reduser, false));
    }

    return (
        <form className="search-form">
            <div className="search-bar">
              <input type='search' value={reduser.searchQuery} onChange={(e) => dispatch(setSeaechQuery(e.target.value))}/>
              <CustomButton onClick={search}>Search</CustomButton>
            </div>

            <div className="search-setting">
              <Select
                title={"Categories:"}
                options={reduser.categories}
                selected={reduser.category}
                setSelected={(category) => dispatch(setCategory(category))}/>

              <Select
                title={"Sorting by:"}
                options={reduser.sorted}
                selected={reduser.orderBy}
                setSelected={(orderBy) => dispatch(setOrderBy(orderBy))}/>
            </div>
        </form>
    );
}

export default SearchForm;
