const Input = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      required={props.required  || " "}
    />
  );
};
export default Input;
