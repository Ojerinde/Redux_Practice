import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import CountriesCard from "./components/CountryCard/CountriesCard";
import "./App.scss";

const App = () => {
  return (
    <main>
      <Header />
      <Search />
      <CountriesCard />
    </main>
  );
};

export default App;
