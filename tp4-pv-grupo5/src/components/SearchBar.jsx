import React from "react";

const SearchBar = ({ value, onChange}) => {
    return (
        <div>
        <input
        type="text"
        placeholder="Buscar producto..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ padding: '8px', width: '100%', marginBottom: '1rem' }}
      />
        </div>
    )
}
export default SearchBar;