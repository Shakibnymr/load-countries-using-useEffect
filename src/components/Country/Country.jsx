import { useState } from "react";
import "./Country.css";
import CountryDetail from "../country-details/CountryDetail";

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  console.log(country)
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };

  

  const passWithParams = () => handleVisitedCountry(country);

  return (
    <div className={`country ${visited && "visited"}`}>
      <h2 style={{ color: visited ? "yellow" : "purple" }}>
        Name: {name?.common}{" "}
      </h2>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button onClick={passWithParams}>Mark visited</button> <br />
      <button
        onClick={() => {
          handleVisitedFlags(country.flags.png);
        }}
      >
        Add Flag
      </button>
      <button onClick={handleVisited}>{visited ? "visited" : "going"}</button>
      {visited && "  I have visited this country"}
      <hr />
      <CountryDetail
      country={country}
      handleVisitedCountry={handleVisitedCountry}
      handleVisitedFlags={handleVisitedFlags}
      ></CountryDetail>
    </div>
  );
};

export default Country;
