import "./Input.scss";

const Input = (props) => {
  return (
    <div className="form__row">
      <label className="form__label" htmlFor={props.id}>{props.label}</label>
      <input className="form__input"
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        required
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};
export default Input;
