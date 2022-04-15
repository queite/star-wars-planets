import React, { useContext, useState } from 'react';
import Context from '../context/Context';

function Filters() {
  const { filters, setFilters, columnFilters,
    savedFilters, setSavedFilters } = useContext(Context);

  // State usado para criar objeto para filtro numérico
  const [numericalFilter, setNumericalFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  // Fonte desta função: https://metring.com.br/javascript-primeira-letra-maiuscula
  // Usar função e linha: capitalize(name.replace(/_/i, ' ')) depois de passar nos testes
  // const capitalize = (str) => (typeof str !== 'string'
  //   ? ''
  //   : str.charAt(0).toUpperCase() + str.substr(1));

  return (
    <>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="Digite um planeta"
        onChange={ (e) => setFilters({ ...filters, filterByName: e.target.value }) }
      />
      <select
        defaultValue={ columnFilters[0] }
        data-testid="column-filter"
        onChange={ ({ target }) => setNumericalFilter({
          ...numericalFilter,
          column: target.value,
        }) }
      >
        {columnFilters.map((name) => (
          <option
            key={ name }
            value={ name }
          >
            {name}
          </option>))}
      </select>
      <select
        defaultValue="maior que"
        data-testid="comparison-filter"
        onChange={ ({ target }) => setNumericalFilter({
          ...numericalFilter,
          comparison: target.value,
        }) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        defaultValue={ 0 }
        type="number"
        data-testid="value-filter"
        placeholder="Digite um número"
        onChange={ ({ target }) => setNumericalFilter({
          ...numericalFilter,
          value: target.value,
        }) }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => setSavedFilters([...savedFilters, numericalFilter]) }
      >
        Filtrar

      </button>
    </>

  );
}

export default Filters;
