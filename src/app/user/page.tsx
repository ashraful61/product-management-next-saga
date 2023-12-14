'use client'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { createUser } from "../redux/actions/createUser";
import { getUsers } from "../redux/actions/getUsers";


const Users = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const users = useSelector((state: any) => state.users.data);
  const addUser = () => {
    // dispatch(createUser(inputValue));
    setInputValue("");
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
console.log(users);
  return (
    <div>
      <div>Total: {users.length}</div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addUser}>Add user</button>
      </div>
      <div>
        {users.map((user: any, index: any) => (
          <div key={index}>{user.name}</div>
        ))}
      </div>
    </div>
  );
};
export default Users;