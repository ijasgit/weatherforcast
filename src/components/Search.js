import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GeoApioptions, GeoUrl } from "../api";
import "../components/search.css"

const Search = ({ onSearchChange }) => {
  const [search, setsearch] = useState(null);

  function loadOptions(inputvalue) {
    return fetch(
      `${GeoUrl}/cities?minPopulation=100&namePrefix=${inputvalue}`,
      GeoApioptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude},${city.longitude}`,
              label: `${city.name},${city.countryCode}`
            };
          })
        };
      })
      .catch((err) => console.error(err));
  }

  function handleOnchange(result) {
    setsearch(result);
    onSearchChange(result);
    console.log(result);
  }

  return (
    <div className="searchbar">
      <AsyncPaginate
        placeholder="Search city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnchange}
        loadOptions={loadOptions}
      />
    </div>
  );
};

export default Search;
