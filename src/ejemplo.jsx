import React, { useState } from 'react';

const SelectComponent = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h2>Selecciona una opción:</h2>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">-- Seleccionar --</option>
        <option value="opcion1">Opción 1</option>
        <option value="opcion2">Opción 2</option>
        <option value="opcion3">Opción 3</option>
      </select>
      {selectedOption && <p>Has seleccionado: {selectedOption}</p>}
    </div>
  );
};

export default SelectComponent;