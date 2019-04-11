import React, { Component } from "react";
import ListadoTareas from "./listadoTareas";

class Counters extends Component {
  state = {
    counters: [{ id: 1, value: 4 }]
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counter[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters: counters });
  };

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <ListadoTareas />
        ))}
      </div>
    );
  }
}

export default Counters;
