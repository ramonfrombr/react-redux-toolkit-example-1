import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllUsers } from "./usersSlice";

const UsersList = () => {
  const users = useSelector(selectAllUsers);

  const renderedUsers = users.map((user) => (
    <li key={user.id}>
      <Link to={`/users/${user.id}`}>{user.name}</Link>
    </li>
  ));
  return (
    <section>
      <h2 className="my-2 text-2xl text-white">Users</h2>

      <ul className="rounded bg-white p-3 [&>li]:mb-4 [&>li]:cursor-pointer [&>li]:text-blue-500 [&>li:hover]:underline">
        {renderedUsers}
      </ul>
    </section>
  );
};

export default UsersList;
