const Results = ({ formData }) => {
  //   console.log(formData.name);
  //   console.log(formData.isEntrying);
  const handleClick = () => {
    // console.log("click");
    formData.setIsEntrying(true);
  };
  return (
    <div className="results">
      <p>Nom : {formData.name}</p>
      <p>Mail : {formData.email}</p>
      <p>Password : {formData.password1}</p>
      <button className="Edit" onClick={handleClick}>
        Edit your informations
      </button>
    </div>
  );
};

export default Results;
