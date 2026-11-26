/* eslint-disable react/prop-types */
const Input = ({handleChange, value, suggestion, handleComplete }) => {
  return (
    <div className="input">
     
      <span className="suggestion">
  <span>{value}</span>
  <span className="gray">{suggestion}</span>
</span>
      <input
        type="text"
        id="input"
          value={value}
        onChange={handleChange}
  onKeyDown={(event) => {
  if (event.key === "Tab") {
    event.preventDefault();
    handleComplete();
  }
}}

      />   
    </div>
  );
};

export default Input;
