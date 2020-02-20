import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Search extends Component {
  state = {
    search: ""
  };
  static propTypes = {
    onSearchUser: PropTypes.func.isRequired,
    clear: PropTypes.func.isRequired
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    e.preventDefault();
    this.props.onSearchUser(this.state.search);
  };
  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search github users"
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="submit"
            className="btn btn-block btn-dark"
          />
        </form>
        <div>
          <button className="btn btn-block" onClick={this.props.clear}>
            Clear
          </button>
        </div>
      </div>
    );
  }
}
