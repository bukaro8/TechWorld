import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import style from "./search.module.css"


const Search = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState({ name: "" });
  const [error, setError] = useState(true);

  function handleInputChange(e) {
    e.preventDefault();
    //   [e.target.name]: e.target.value.trim(),
  }
  function handleSubmit(e) {
    e.preventDefault(e);
    e.target.reset();
  }
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        name="name"
        value=''
        onChange={handleInputChange}
        type="text"
        placeholder="Buscar..."
        autoComplete="off"
      />
      <button className={style.button} disabled={error} type="submit">
        Buscar
      </button>
    </form>)
}

export default Search