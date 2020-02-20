import React, { Component } from "react";
import PropTypes from "prop-types";

import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.length ? (
          users.map(user => <UserItem key={user.id} user={user} />)
        ) : (
          <h4>No user found!</h4>
        )}
      </div>
    );
  }
};
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};
Users.propTypes = {
  loading: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired
};
export default Users;
