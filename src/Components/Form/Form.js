// Form.js

import React, { useState } from 'react';

const Form = (props) => {
  const [form, setForm] = useState({
    userName: 'Abel',
    age: 50,
  });

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmitCallback(form)
  };

  const inputChange = (input, event) => {
    setForm((prevInput) => {
      return {
        ...prevInput,
        [input]: event,
      };
    });
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <label htmlFor="userName">User Name</label>
      <input
        value={form['userName']}
        type="text"
        id="userName"
        onChange={(event) => inputChange('userName', event.target.value)}
      ></input>
      <label htmlFor="age">Age</label>
      <input
        value={form['age']}
        type="number"
        id="age"
        onChange={(event) => inputChange('age', event.target.value)}
      ></input>
      <button type="submit" className="button">
        Add
      </button>
    </form>
  );
};

export default Form;
