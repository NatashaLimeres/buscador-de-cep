import React from "react";
import { FiSearch } from "react-icons/fi";

function UserInput({ input, setInput, handleSearch }) {
  return (
    <div className="containerInput">
      <input
        type="text"
        placeholder="Digite seu CEP..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button className="searchButton" onClick={handleSearch}>
        <FiSearch size={25} color="#FFF" />
      </button>
    </div>
  );
}

export default UserInput;
