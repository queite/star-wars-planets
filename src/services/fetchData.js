const fetchData = (succcess, error) => {
  fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((response) => response.json()
      .then((json) => (response.ok ? succcess(json) : error(json))));
};

export default fetchData;
