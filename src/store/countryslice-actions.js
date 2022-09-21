import { countryActions } from "./country-slice";

export const fetchRequest = (countryName) => {
  return async (dispatch) => {
    try {
      const fetchResponse = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`
      );

      if (!fetchResponse.ok) {
        throw new Error("Something went wrong");
      }
      const responseBody = await fetchResponse.json();
      const transformedBody = {};

      transformedBody.name = responseBody[0].name.common;
      transformedBody.population = responseBody[0].population;
      transformedBody.region = responseBody[0].region;
      transformedBody.area = responseBody[0].area;
      transformedBody.capital = responseBody[0].capital[0];
      transformedBody.flag = responseBody[0].flags.png;
      transformedBody.map = responseBody[0].maps.googleMaps;

      dispatch(countryActions.addCountry(transformedBody));

      const sendResponse = await fetch(
        "https://react-http-joel-default-rtdb.firebaseio.com/countries.json",
        {
          method: "POST",
          body: JSON.stringify(transformedBody),
        }
      );

      if (!sendResponse.ok) {
        throw new Error("Sending failed...");
      }
    } catch (error) {
      console.error(error.message);
    }
  };
};

export const getCountriesFromDatabase = () => {
  return (dispatch) => {
    const fetchData = async () => {
      const fetchResponse = await fetch(
        "https://react-http-joel-default-rtdb.firebaseio.com/countries.json"
      );

      if (!fetchResponse.ok) {
        throw new Error("Fetching failed...");
      }

      const body = await fetchResponse.json();

      let countries = [];
      for (const key in body) {
        countries.push(body[key]);
      }
      dispatch(countryActions.addCountry(countries));
    };

    fetchData().catch((error) => console.log(error));
  };
};
