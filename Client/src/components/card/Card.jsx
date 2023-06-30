import { Link } from "react-router-dom";
import style from "./card.module.css";
import { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/actions";



function Card(props) {
  const { character, id, favorites, onClose } = props;
  const dispatch = useDispatch()

  const [fav, setFav] = useState(false);

  // const onClose = () => {
  //   removeFavorite(id);
  // };
  
  useEffect(() => {
    favorites.forEach((fav) => {
      if (fav.id === id) {
        setFav(true);
      }
    });
  }, [favorites, id]);

  function handleFavorite() {
    if (!fav) {
      dispatch(addFavorite(character));
      setFav(true);
    } else {
      dispatch(removeFavorite(character.id));
      setFav(false);
    }
  }
  const handleCardClose = () => {
    onClose(id);
  };

  return (
    <div className={style.cardContainer}>
      <div className={style.imageContainer}>
        <img
          className={style.characterImage}
          src={character.image}
          alt={character.name}
        />
        <Link to={`/detail/${id}`}>
          <h2 className={style.name}>{character.name}</h2>
        </Link>

        {fav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}

        <button className={style.closeButton} onClick={handleCardClose}>
          X
        </button>
      </div>

      <div className={style.atributes}>
        <h2>{character.species}</h2>
        <h2>{character.gender}</h2>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    favorites: state.myFavorites,
  };
};

// function mapDispatchToProps(dispatch) {
//   return {
//     addFavorite: (character) => dispatch(addFavorite(character)),
//     removeFavorite: (character) => dispatch(removeFavorite(character.id)),
//   };
// }

export default connect(mapStateToProps, null)(Card);
