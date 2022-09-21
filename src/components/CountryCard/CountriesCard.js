// import CountryCard from "./CountryCard";
import "./CountriesCard.scss";

import { useSelector } from "react-redux";
import { lazy, Suspense } from "react";
import Card from "../UI/Card/Card";
const CountriesCard = () => {
  const countries = useSelector((state) => state.countries);
  const CountryCard = lazy(() => import("./CountryCard"));
  return (
    <div className="countries__box">
      {countries.map((country, index) => (
        <Suspense
          fallback={
            <Card>
              <div>Loading...</div>
            </Card>
          }
          key={index}
        >
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
        </Suspense>
      ))}
    </div>
  );
};

export default CountriesCard;
