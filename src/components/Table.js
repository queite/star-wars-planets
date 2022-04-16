import React, { useContext } from 'react';
import Context from '../context/Context';
import './Table.css';

function Table() {
  const { data: { results }, filters: { filterByName },
    savedFilters } = useContext(Context);

  function filters() {
    const planetToLowerCase = filterByName.toLowerCase();
    if (filterByName !== '') {
      return results
        .filter((planet) => planet.name.toLowerCase().includes(planetToLowerCase));
    }
    if (savedFilters.length) {
      return savedFilters.reduce((acc, filterObj) => {
        acc = acc.filter((item) => {
          switch (filterObj.comparison) {
          case 'maior que':
            return Number(item[filterObj.column]) > Number(filterObj.value);
          case 'menor que':
            return Number(item[filterObj.column]) < Number(filterObj.value);
          default:
            return Number(item[filterObj.column]) === Number(filterObj.value);
          }
        });
        return acc;
      }, results);
    }
    return results;
  }

  const planetsToRender = filters();

  if (!planetsToRender) return (<span>Loading</span>);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        { planetsToRender.map((item) => (
          <tr key={ item.name }>
            <td>{item.name}</td>
            <td>{item.rotation_period}</td>
            <td>{item.orbital_period}</td>
            <td>{item.diameter}</td>
            <td>{item.climate}</td>
            <td>{item.gravity}</td>
            <td>{item.terrain}</td>
            <td>{item.surface_water}</td>
            <td>{item.population}</td>
            <td>{item.films}</td>
            <td>{item.created}</td>
            <td>{item.edited}</td>
            <td>{item.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
