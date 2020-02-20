import React from "react";
import PropTypes from "prop-types";

const Alert = props => {
  const { type, message } = props.alert;
  return <div className={`alert alert-${type}`}>{message}</div>;
};
Alert.protoTypes = {
  alert: PropTypes.object.isRequired
};
export default Alert;
