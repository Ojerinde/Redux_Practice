import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCountriesFromDatabase } from "./store/countryslice-actions";

import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import CountriesCard from "./components/CountryCard/CountriesCard";
import "./App.scss";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountriesFromDatabase());
  }, [dispatch]);

  
  return (
    <main>
      <Header />
      <Search />
      <CountriesCard />
    </main>
  );
};

export default App;
