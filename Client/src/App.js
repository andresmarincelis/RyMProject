import { useState, useEffect } from 'react';
import axios from "axios";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useDispatch } from "react-redux";
import {removeFavorite} from "./redux/actions";
import { Detail } from "./components/detail/Detail";
import About from "./components/about/About";
import Cards from "./components/cards/Cards";
import logoRM from "./assets/logorm.png";
import Nav from "./components/nav/nav";
import LandingPage from "./components/landingPage/landingPage"
import Favorites from "./components/favorites/Favorites";
import Button from "./components/about/About";
import "./App.css";


function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showLogo = location.pathname === '/home' || location.pathname === "/favorites" || location.pathname === "/";


  // const email = 'ejemplo@ejemplo.com';
  // const password = 'ejemplo123';

  const login = (userData) => {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${email}&password=${password}`)
    .then(response => response.data)
    .then((data) => {
       const { access } = data;
       setAccess(access);
       access && navigate('/home');
    });
 }

  useEffect(() => {
    if (!access) {
      navigate('/');
    }
  }, [access, navigate]);


  const getRandom = () => {
    const random = Math.floor(Math.random() * 826)
    onSearch(random)
  }

  const onSearch = (id) => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      console.log(data)
      if (data.name) {
        const existe = characters.find(char => char.id === data.id)
        if (existe) return window.alert("Ese personaje ya existe")
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert('¡No hay personajes con este ID!');

      }
    })
  }

  const onClose = (id) => {
    const filtrados = characters.filter((character) => character.id !== Number(id));

    dispatch(removeFavorite(id));

    setCharacters(filtrados)

  }

  //  function searchHandler(id) {
  //  setCharacters([...characters, example]);
  //  }

  // function closeHandler() {
  //   window.alert("Emulamos que se cierra la card");
  // }

  return (
    <div className="body">
      <div className="App">
        {showLogo && <img className="logo" src={logoRM} alt="logo" />}
        {location.pathname !== "/" && (
          <Nav onSearch={onSearch} random={getRandom} />
        )}

        <Routes>
          <Route path="/" element={<LandingPage login={login} />} />
          <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/About" element={<About about={<Button />} />} />
          <Route path="/favorites" element={<Favorites onClose={onClose}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
