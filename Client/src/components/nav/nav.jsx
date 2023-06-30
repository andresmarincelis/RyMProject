import SearchBar from "../searchbar/SearchBar";
import { Link } from 'react-router-dom'

const Nav = function (props) {
    const { onSearch, random } = props;

    return (
        <nav>
            <SearchBar onSearch={onSearch} />
            <button onClick={random}>RANDOM</button>
            <Link to={'/about'}>
                <button>ABOUT</button>
            </Link>
            <Link to={'/home'}>
                <button>HOME</button>
            </Link>
            <Link to={'/favorites'}>
                <button>FAVORITES</button>
            </Link>
        </nav>
    )
}

export default Nav;