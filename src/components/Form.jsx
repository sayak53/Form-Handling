const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value)
    console.log(e.target.password.value)
    console.log("form submitted");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter your name" />
        <br />
        <input type="email" name="email" placeholder="Enter your email" />
        <br />
        <input type="password" name="password" placeholder="Enter your password"/>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
