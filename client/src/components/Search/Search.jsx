import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import style from "./search.module.css"

import { getByName } from '../../Redux/actions/index'


const Search = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  // const [error, setError] = useState(true);

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getByName(name));
    setName("")
  }
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };
  return (
    <div>
      <input
        type="text"
        className={style.input}
        name="name"
        value={name}
        onChange={(e) => handleInputChange(e)}
        onKeyDown={(e) => handleKeyDown(e)}
        placeholder="Buscar..."
      />
      <button className={style.button} type="submit" onClick={(e) => handleSubmit(e)}>
        Buscar 🔍
      </button>
      </div>
  );
}

export default Search