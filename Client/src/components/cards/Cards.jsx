import Card from "../card/Card";
import style from "./cards.module.css";

export default function Cards(props) {
  const {characters, onClose} = props;

  return (
    <div className={style.cardList}>
      {characters.map((character) => (
        <Card id={character.id} key={character.id} character={character} onClose={onClose} />
      ))}
    </div>
  );
}



// import Card from "../card/Card";
// import style from "./cards.module.css";
// import { useState } from 'react';

// export default function Cards(props) {
//   const { characters } = props;
//   const [updatedCharacters, setCharacters] = useState(characters);

//   const onClose = (id) => {
//     const filteredCharacters = updatedCharacters.filter((character) => character.id !== id);
//     setCharacters(filteredCharacters);
//   };

//   return (
//     <div className={style.cardList}>
//       {updatedCharacters.map((character) => (
//         <Card
//           id={character.id}
//           key={character.id}
//           character={character}
//           onClose={onClose}
//         />
//       ))}
//     </div>
//   );
// }
