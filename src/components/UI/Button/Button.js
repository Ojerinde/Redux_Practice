import "./Button.scss";

const Button = (props) => {
  return (
    <button className="search__button" type="submit">
      {props.children}
    </button>
  );
};

export default Button;
