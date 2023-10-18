import SearchBar from "../searchbar/SearchBar";
import { Link } from 'react-router-dom';
import style from "./nav.module.css"

const Nav = function (props) {
    const { onSearch, random } = props;

    return (
        <div>
            <SearchBar onSearch={onSearch} />
            <button className={style.myButton} onClick={random}>RANDOM</button>
            <Link to={'/about'}>
                <button className={style.myButton}>ABOUT</button>
            </Link>
            <Link to={'/home'}>
                <button className={style.myButton}>HOME</button>
            </Link>
            <Link to={'/favorites'}>
                <button className={style.myButton}>FAVORITES</button>
            </Link>
        </div>
    )
}

export default Nav;