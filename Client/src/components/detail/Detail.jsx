import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import style from "./Detail.module.css"


export const Detail = () => {
  const params = useParams()
  const [character, setCharacter] = useState({})
  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${params.id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert('No hay personajes con ese ID');
      }
    });
    return setCharacter({});
  }, [params.id]);

  return (
    <div className={style.detailContainer}>
      <img className={style.card_img} src={character.image} alt="" />
      <h3 className={style.nameH3}>Nombre: {character.name}</h3>
      <p className={style.nameH3}>Status: {character.status}</p>
      <p className={style.nameH3}>Especie: {character.species}</p>
      <p className={style.nameH3}>Genero: {character.gender}</p>
      <p className={style.nameH3}>Origen: {character.origin?.name}</p>


    </div>
  )
}


