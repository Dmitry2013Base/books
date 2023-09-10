import { useSelector } from "react-redux";
import '../styles/loader.css';

const Loader = () => {
    const loader = useSelector(state => state.LoaderReduser)
    return (
        <>
            {
                <div className={ `loader${(!loader.visible) ? ' loader-not-visible' : ''}` }>
                    <div className="loader-content">
                        <div className="load-header">Подождите...</div>
                        <div className="load"></div>
                    </div>
                </div>
            }
        </>
    );
}
export default Loader;
