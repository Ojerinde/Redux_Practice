import { useState } from "react";

import Card from "../../components/UI/Card/Card";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

import { useDispatch } from "react-redux";
// import { countryActions } from "../../store/country-slice";
import { fetchRequest } from "../../store/countryslice-actions";

import "./Search.scss";
const Search = () => {
  const dispatch = useDispatch();

  // To set and clear the input field.
  const [inputValue, setInputValue] = useState("");

  // To check if the input value is valid onChange
  const [IsValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  // To check if the the user already focus the input field
  const checkInputIsTouched = () => {
    setIsTouched(true);
  };

  const checkInputIsValid = (e) => {
    setInputValue(e.target.value);

    const reg = /[^0-9]/;

    if (e.target.value.slice(-1).match(reg)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    
    await  dispatch(fetchRequest(inputValue.toLowerCase()));
    // try {
    //   const response = await fetch(
    //     `https://restcountries.com/v3.1/name/${inputValue.toLowerCase()}`
    //   );

    //   if (!response.ok) {
    //     throw new Error('Something went wrong')
    //   }

    //   const responseBody = await response.json();
    //   const transformedBody = {}

    //   transformedBody.name = responseBody[0].name.common
    //   transformedBody.population = responseBody[0].population
    //   transformedBody.region = responseBody[0].region
    //   transformedBody.area = responseBody[0].area
    //   transformedBody.capital = responseBody[0].capital[0]
    //   transformedBody.flag = responseBody[0].flags.png
    //   transformedBody.map = responseBody[0].maps.googleMaps

    //   dispatch(countryActions.addCountry(transformedBody))

    // } catch (error) {
    //   console.error(error);
    // }

    setInputValue("");
    setIsTouched(false);
    setIsValid(false);
  };

  return (
    <Card className="search__box">
      <form onSubmit={submitHandler}>
        <Input
          label="Which country would you like to know about?"
          placeholder="Enter a country name"
          type="text"
          name="country"
          value={inputValue}
          onChange={checkInputIsValid}
          onBlur={checkInputIsTouched}
        />
        {!IsValid && isTouched ? (
          <p className="error__message">Only text is allowed</p>
        ) : (
          " "
        )}
        <Button>Alright!</Button>
      </form>
    </Card>
  );
};
export default Search;
