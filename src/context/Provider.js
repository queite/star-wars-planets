import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import Context from './Context';
import fetchData from '../services/fetchData';

const initialColumnFilters = ['population', 'orbital_period',
  'diameter', 'rotation_period', 'surface_water'];

function Provider({ children }) {
  const [data, setData] = useState({});
  const [error, setError] = useState({});
  const [filters, setFilters] = useState({ filterByName: '' });
  const [columnFilters, setColumnFilters] = useState(initialColumnFilters);
  const [savedFilters, setSavedFilters] = useState([]);
  const [order, setOrder] = useState({});

  // Chama o resultado do fetch
  useEffect(() => fetchData(setData, setError), []);

  // Ordenação inicuial dos planetas por ordem alfabética
  function ordenateResults() {
    const { results } = data;
    if (results) {
      results.sort((a, b) => a.name.localeCompare(b.name));
    }
  }
  ordenateResults();

  // Variável que engloba dados do contexto
  const context = {
    data,
    error,
    filters,
    setFilters,
    columnFilters,
    setColumnFilters,
    savedFilters,
    setSavedFilters,
    order,
    setOrder,
  };

  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: propTypes.node.isRequired,
  // context: propTypes.shape({
  //   handleFetchSuccess: propTypes.func,
  //   handleFetchError: propTypes.func,
  // }).isRequired,
};

export default Provider;
