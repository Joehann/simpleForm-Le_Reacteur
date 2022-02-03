import Input from "./Input";
const RegisterForm = ({ formData }) => {
  //handleSubmit soumet le formulaire en vérifiant que les mots de passes soient identiques
  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.password1 !== formData.password2) {
      alert("Les mots de passe doivent être identiques.");
      return;
    }
    // console.log(event);
    // console.log(formData);
    formData.setIsEntrying(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          label="name"
          type="text"
          placeholder="Jean Dupont"
          setValue={formData.setName}
          value={formData.name}
        />
        <Input
          label="email"
          type="email"
          placeholder="jeandupont@mail.com"
          setValue={formData.setEmail}
          value={formData.email}
        />
        <Input
          label="password"
          type="password"
          placeholder="Password"
          setValue={formData.setPassword1}
          value={formData.password1}
        />
        <Input
          label="confirm your pw"
          type="password"
          placeholder="Password"
          setValue={formData.setPassword2}
          value={formData.password2}
        />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default RegisterForm;
