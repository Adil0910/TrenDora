import "./Input.css";

const Input = ({ label, type = "text", value, onChange, placeholder, error, name }) => {
  return (
    <div className="input-group">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`input-field ${error ? "input-error" : ""}`}
      />
      {error && <span className="input-error-text">{error}</span>}
    </div>
  );
};

export default Input;
