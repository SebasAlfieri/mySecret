import React, { useState } from "react";
import styled from "styled-components";
import { createPost } from "../services/firebase";

const Container = styled.div`
  height: fit-content;
  margin: 50px 0;
  min-width: 300px;
  width: 90%;

  @media (min-width: 768px) {
    width: 800px;
  }
`;

function InputsContainer() {
  const range = (min, max) =>
    [...Array(max - min + 1).keys()].map((i) => i + min);

  const newArr = range(15, 100);

  const [error, setError] = useState({});

  function errorColor() {
    setError({ color: "red" });
  }

  function okColor() {
    setError({ color: "black" });
  }

  const [dataForm, setDataForm] = useState({
    secret: "",
    gender: "",
    years: "",
  });

  function handlePost(event) {
    function dateToString() {
      const currentDate = new Date();

      const currentDayOfMonth = currentDate.getDate();
      const currentMonth = currentDate.getMonth();
      const currentYear = currentDate.getFullYear();

      const dateString =
        currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;
      return dateString;
    }
    event.preventDefault();
    const orderData = {
      post: dataForm,
      date: dateToString(),
    };
    if (dataForm.secret.length < 10) {
      errorColor();
    }
    if (dataForm.secret.length >= 10) {
      createPost(orderData);
    }
  }

  function inputChangeHandler(evento) {
    let inputName = evento.target.name;
    let value = evento.target.value;

    const newDataForm = { ...dataForm };
    newDataForm[inputName] = value;
    setDataForm(newDataForm);
  }

  function inputChangeHandlerText(evento) {
    let inputName = evento.target.name;
    let value = evento.target.value;

    const newDataForm = { ...dataForm };
    newDataForm[inputName] = value;
    setDataForm(newDataForm);

    if (dataForm.secret.length <= 9) {
      errorColor();
    } else if (dataForm.secret.length > 9) {
      okColor();
    }
  }

  return (
    <Container>
      <form onSubmit={handlePost}>
        <textarea
          style={error}
          className="inputText"
          value={dataForm.secret}
          onChange={inputChangeHandlerText}
          name="secret"
          type="text"
          maxLength="1000"
          placeholder="Tell your anonymous secret"
          required
        />
        <div className="inputsBottom">
          <div className="radioContainer">
            <div className="radioInput">
              <label htmlFor="hombre">Male</label>
              <input
                className="maleRadio"
                value="male"
                onChange={inputChangeHandler}
                name="gender"
                type="radio"
                required
              />
            </div>
            <div className="radioInput">
              <label htmlFor="female">Female</label>
              <input
                className="femaleRadio"
                value="female"
                onChange={inputChangeHandler}
                name="gender"
                type="radio"
              />
            </div>
          </div>
          <select
            className="inputYears"
            name="years"
            required
            onChange={inputChangeHandler}
          >
            <option value="">Age</option>
            {newArr.map((number) => {
              return [
                <option key={number} value={number}>
                  {number}
                </option>,
              ];
            })}
          </select>
          <label htmlFor="years">Age</label>
        </div>
        <button className="inputSubmit" type="submit">
          Post
        </button>
      </form>
    </Container>
  );
}

export default InputsContainer;
