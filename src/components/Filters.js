import React, { useContext } from 'react';
import Context from '../context/Context';

function Filters() {
  const { filters, setFilters, numericalFilters } = useContext(Context);

  // Fonte desta função: https://metring.com.br/javascript-primeira-letra-maiuscula
  const capitalize = (str) => (typeof str !== 'string'
    ? ''
    : str.charAt(0).toUpperCase() + str.substr(1));

  return (
    <>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="Planets filter"
        onChange={ (e) => setFilters({ ...filters, filterByName: e.target.value }) }
      />
      <select>
        {numericalFilters.map((name) => (
          <option key={ name } value={ name }>{capitalize(name.replace(/_/i, ' '))}</option>))}
      </select>
    </>

  );
}

export default Filters;
