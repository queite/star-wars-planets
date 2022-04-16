import React, { useContext, useState, useEffect } from 'react';
import Context from '../context/Context';

const noMagicNumber = 36;

function Filters() {
  const { filters, setFilters, columnFilters,
    savedFilters, setSavedFilters, setColumnFilters } = useContext(Context);

  // State usado para criar objeto para filtro numérico
  const [numericalFilter, setNumericalFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
    id: Math.floor(Date.now() * Math.random()).toString(noMagicNumber), // Fonte: https://codigofonte.org/gerando-id-aleatorio-em-javascript/
  });

  // Fonte desta função: https://metring.com.br/javascript-primeira-letra-maiuscula
  // Usar função e linha: capitalize(name.replace(/_/i, ' ')) depois de passar nos testes
  // const capitalize = (str) => (typeof str !== 'string'
  //   ? ''
  //   : str.charAt(0).toUpperCase() + str.substr(1));

  // Não repetição de filtros numéricos
  useEffect(() => {
    const initialColumnFilters = ['population', 'orbital_period',
      'diameter', 'rotation_period', 'surface_water'];
    const currentFilters = savedFilters.map((filter) => filter.column);
    if (currentFilters) {
      const newFilter = initialColumnFilters
        .filter((column) => !currentFilters.includes(column));
      setColumnFilters(newFilter);
    }
  }, [savedFilters, setColumnFilters]);

  function handleDeleteFilter(idFilter) {
    const newSavedFilter = savedFilters.filter((item) => item.id !== idFilter);
    setSavedFilters(newSavedFilter);
  }

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
          id: Math.floor(Date.now() * Math.random()).toString(noMagicNumber),
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
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ () => setSavedFilters([]) }
      >
        Remover filtros
      </button>
      <section>
        { savedFilters && savedFilters.map((filter) => (
          <p key={ filter.id } data-testid="filter">
            {`${filter.column} ${filter.comparison} ${filter.value}`}
            <button
              type="button"
              onClick={ () => handleDeleteFilter(filter.id) }
            >
              X
            </button>
          </p>
        ))}
      </section>
    </>

  );
}

export default Filters;
