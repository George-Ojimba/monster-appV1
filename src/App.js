import React, { Component } from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list.component";
import { SearchInput } from "./components/input/input.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json()) //convert response to JSON
      .then((users) => this.setState({ monsters: users }))
      .catch((error) => console.log(error));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filterMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="app">
        <h1 className="app__heading">Monster Rolodex</h1>
        <SearchInput
          placeholder="Search Monsters"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filterMonster} />
      </div>
    );
  }
}

export default App;

/* as soon as state changes, we re-render the component 










*/
