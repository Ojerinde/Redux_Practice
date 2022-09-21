import { countryActions } from "../../store/country-slice";
import { useDispatch, useSelector } from "react-redux";

import Card from "../UI/Card/Card";

import { BsToggleOff } from "react-icons/bs";
import { BsToggleOn } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import "./CountryCard.scss";

import myImg from "../../assets/img.jpg";
import { useState } from "react";

const CountryCard = (props) => {
  const [shown1, setShown1] = useState(true);
  const country = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  const togglerHandler = () => {
    dispatch(countryActions.toggle());
    setShown1((prev) => !prev);
  };

  const deleteHandler = () => {
    dispatch(countryActions.removeCountry(props.name));
    
    const fetchData = async () => {
      const fetchResponse = await fetch(
        "https://react-http-joel-default-rtdb.firebaseio.com/countries.json",
        {
          method: "PUT",
          body: JSON.stringify(country),
        }
      );

      if (!fetchResponse.ok) {
        throw new Error("Fetching failed...");
      }
    };
    fetchData().catch((error) => console.log(error));
  };

  return (
    <Card className="country__card--box">
      <div className="card__header">
        {shown1 ? (
          <BsToggleOn
            onClick={togglerHandler}
            className="card__toggle card__toggle--on"
          />
        ) : (
          <BsToggleOff
            onClick={togglerHandler}
            className="card__toggle card__toggle--off"
          />
        )}
        <ImCross onClick={deleteHandler} className="card__toggle--delete" />
      </div>
      {shown1 ? (
        <div>
          <figure className="card__img--box">
            <img src={props.flag || myImg} alt="name" className="card__img" />
          </figure>
          <div className="card__details">
            <div className="card__details--header">
              {props.name || "Ojerinde"}
            </div>
            <div className="card__details--body">
              <p>
                Capital: <span>{props.capital || "Ojerinde"}</span>
              </p>
              <p>
                Population: <span>{props.population || "Ojerinde"}</span>
              </p>
              <p>
                Region: <span>{props.region || "Ojerinde"}</span>
              </p>
              <p>
                Area: <span>{props.area || "Ojerinde"}</span>
              </p>
              <a href={props.map || "Ojerinde"}> Go to Google Map</a>
            </div>
          </div>
        </div>
      ) : (
        <p className="card__not--shown">Toggle to show...</p>
      )}
    </Card>
  );
};
export default CountryCard;
