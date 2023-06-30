import {
   SearchContainer,
   SearchInput,
   SearchIcon,
   SearchIconContainer,
 } from "./searchBar.styles";
 import { useState } from 'react';
 
 export default function SearchBar(props) {
   const {onSearch} = props;
   const [id, setId] = useState('');

   const handleChange = (event) => {
    setId(event.target.value)
   }
 
   return (
     <SearchContainer>
       <SearchInput type="search" onChange={handleChange} value={id}/>
       <SearchIconContainer>
         <SearchIcon onClick={() => onSearch(id)} />
       </SearchIconContainer>
     </SearchContainer>
   );
 }
 
 //***linea 21 cuando quiero agregarle un parametro a una funcion para que no se ejecute, tiene que ser una callback, si no se va a ejecutar antes del click y va a romper todo */