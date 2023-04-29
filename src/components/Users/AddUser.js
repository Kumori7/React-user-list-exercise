import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Button from "../UI/Button";

const AddUsers = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  // for form onSubmit
  const addUserHandler = (event) => {
    // prevent default behavior of
    // request being sent to cause page to reload
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim() === 0) {
      // we are handling error as an object
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    // enteredAge is a string not a number
    // we are comparing it to a number value here( this generally work in js)
    // to be extra safe we can force a conversion of entered age ....
    // to number by using plus symbol to ensure we comparing same type of value
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    //console.log(enteredUsername, enteredAge);
    // clear input field
    setEnteredUsername("");
    setEnteredAge("");
    // now we use two way binding using value section in input filed
  }; // end of onsubmit

  const usernameChangeHandler = (event) => {
    console.log("username input");
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    console.log("age input");
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    // to remove the actvie modal we need to set it to false or null value
    setError(null);
  };

  // "htmlFor" property sets or return the value of the for attribute of a label.
  // important for sc readers, to understand which label belongs to witch input

  // onssubmit prop specify a function that should be executed when form is submited
  return (
    // we are checking if error is a valid condition to condtionally render jsx element
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          // allow us to access to errorHandler in ErrorModal button component
          onConfirm={errorHandler}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUsers;
