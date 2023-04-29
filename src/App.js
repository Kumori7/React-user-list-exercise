import React, { useState } from "react";
import AddUsers from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  // initalize with empty array
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    // depending on previous state of list to append data to new version of list
    setUserList((prevUserList) => {
      // return new array where we copy all elements from previous array
      // using spread operator to pull all elements out
      // add to elements apart of new array
      // we add new element after copying prevList
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  // <UserList users={[]}/> : allows us to pass a empty array
  // so we have no errors when running application with zero data
  return (
    <div>
      <AddUsers onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
