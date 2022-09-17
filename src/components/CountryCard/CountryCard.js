import { countryActions } from "../../store/country-slice";
import { useSelector, useDispatch } from "react-redux";

import Card from "../UI/Card/Card";

import { BsToggleOff } from "react-icons/bs";
import { BsToggleOn } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import "./CountryCard.scss";

import myImg from '../../assets/img.jpg'

const CountryCard = (props) => {
  const shown = useSelector((state) => state.shown);
  const dispatch = useDispatch();

  const togglerHandler = () => {
    dispatch(countryActions.toggle());
  };
  return (
    <Card className="country__card--box">
      <div className="card__header">
        {shown ? (
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
        <ImCross className="card__toggle--delete" />
      </div>
      {shown ? (
        <div>
          <figure className="card__img--box">
            <img src={props.flag|| myImg} alt="name" className="card__img" />
          </figure>
          <div className="card__details">
            <div className="card__details--header">{props.name || 'Ojerinde'}</div>
            <div className="card__details--body">
              <p>
                Capital: <span>{props.capital || 'Ojerinde'}</span>
              </p>
              <p>
                Population: <span>{props.population || 'Ojerinde'}</span>
              </p>
              <p>
                Region: <span>{props.region || 'Ojerinde'}</span>
              </p>
              <p>
                Area: <span>{props.area || 'Ojerinde'}</span>
              </p>
              <a href={props.map || 'Ojerinde'}> Go to Google Map</a>
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
