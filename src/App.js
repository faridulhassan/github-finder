import React, { Component } from "react";
import axios from "axios";
import "./App.scss";

import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import Users from "./components/users/Users";
import Search from "./components/users/Search";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      users: [],
      alert: null
    };
  }
  /*
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({
      loading: false,
      users: res.data
    });
  }
  */
  searchUser = async val => {
    if (!val) {
      this.setState({
        alert: {
          type: "danger",
          message: "Please input your search query!"
        }
      });
      return;
    }
    this.setState({ loading: true, alert: null });
    try {
      const url = `https://api.github.com/search/users?q=${val}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
      const res = await axios.get(url);
      this.setState({
        loading: false,
        users: res.data.items
      });
    } catch (e) {
      this.setState({ loading: false });
      console.log(e);
    }
  };
  clear = () => {
    this.setState({ users: [] });
  };
  render() {
    return (
      <div className="App">
        <Navbar icon="fab fa-github" title="Github User Finder" />
        <div className="container">
          {this.state.alert && <Alert alert={this.state.alert} />}
          <Search onSearchUser={this.searchUser} clear={this.clear} />
          <br />
          <Users users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;
