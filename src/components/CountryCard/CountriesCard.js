import CountryCard from "./CountryCard";
import "./CountriesCard.scss";

import { useSelector } from "react-redux";

const CountriesCard = () => {
  const countries = useSelector((state) => state.countries);
  return (
    <div className="countries__box">
      {countries.map((country, index) => (
        <CountryCard
          key={index}
          capital={country.capital}
          region={country.region}
          area={country.area}
          population={country.population}
          name={country.name}
          flag={country.flag}
          map={country.map}
        />
      ))}
    </div>
  );
};

export default CountriesCard;
