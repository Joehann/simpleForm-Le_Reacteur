const Input = ({ label, type, placeholder, setValue, value }) => {
  //   console.log(setValue);
  const handleChange = (event) => {
    // console.log("Changed !");
    setValue(event.target.value);
  };

  return (
    <div className="input">
      <label htmlFor={label.replace(/\s/g, "-")}>
        {label.charAt(0).toUpperCase() + label.slice(1)}
      </label>
      <input
        name={label.replace(/\s/g, "-")}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default Input;
