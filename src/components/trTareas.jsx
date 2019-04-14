import React, { Component } from "react";

class TrTarea extends Component {
  render() {
    return (
      <tr>
        <td>
          <span key={this.props.id}>{this.props.tareas.nombre}</span>
        </td>
        <td>
          <button
            className="btn btn-primary"
            key={"mod_" + this.props.tareas._id}
            onClick={this.props.modificar}
          >
            Modificar
          </button>
        </td>
        <td>
          <button
            className="btn btn-danger"
            key={"del_" + this.props.tareas._id}
            onClick={this.props.eliminar}
          >
            Eliminar
          </button>
        </td>
      </tr>
    );
  }
}

export default TrTarea;
