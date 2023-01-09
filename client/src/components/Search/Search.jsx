import React from "react";
import { searchByName } from '../../Redux/actions/index'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"
// 
export default function Search() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(searchByName(name));
    setName("");
    history.push("/products")
  }
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div className="m-2">
      <label
        for="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          onChange={(e) => handleInputChange(e)}
          onKeyDown={(e) => handleKeyDown(e)}

          value={name}
          type="search"
          id="default-search"
          className="block p-4 pl-10 w-full text-sm text-gray-900  rounded-full border bg-slate-300 "
          placeholder="Looking for something?"
          required
        />
        <button
          onClick={(e) => handleSubmit(e)}
          type="submit"
          className="text-white absolute right-10 bottom-2.5 bg-blue-500 hover:bg-blue-600 hover:text-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
        >Search
        </button>
      </div>
    </div>
  );
}
