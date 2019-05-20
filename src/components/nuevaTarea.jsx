import React, { Component } from "react";
import axios from "axios";

class NuevaTarea extends Component {
  state = {
    nombre: "",
    descripcion: "",
    estado: false,
    botonAnulado: true,
    errorNombre: true,
    errorDescripcion: true
  };

  render() {
    return (
      <div>
        <h1>Nueva tarea</h1>
        <form>
          <div className="form-group">
            <label htmlFor="inputNombre">Nombre</label>
            <input
              key="inputNombre"
              id="inputNombre"
              type="text"
              value={this.state.nombre}
              onChange={this.getNombre}
              className={
                this.state.errorNombre
                  ? "form-control is-invalid"
                  : "form-control is-valid"
              }
              title="El nombre debe comenzar con mayusculas y sólo letras de la a-z"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputDescripcion">Descripción</label>
            <textarea
              key="inputDescripcion"
              id="inputDescripcion"
              value={this.state.descripcion}
              onChange={this.getDescripcion}
              className={
                this.state.errorDescripcion
                  ? "form-control is-invalid"
                  : "form-control is-valid"
              }
            />
          </div>
          <div className="form-group">
            <div className="form-check">
              <input
                type="checkbox"
                key="inputEstado"
                id="inputEstado"
                checked={this.state.checked}
                onChange={this.getEstado}
                className="form-check-input"
              />
              <label htmlFor="inputEstado" className="form-check-label">
                True
              </label>
            </div>
          </div>
          <div className="form-group">
            <button
              disabled={this.state.botonAnulado}
              key="botonNuevo"
              className="btn btn-success"
              onClick={() => {
                this.nuevo(
                  this.state.nombre,
                  this.state.descripcion,
                  this.state.estado
                );
              }}
            >
              Nueva tarea
            </button>
          </div>
        </form>
      </div>
    );
  }
  getNombre = e => {
    this.setState({ nombre: e.target.value });
    if (
      e.target.value !== "" &&
      !/(^[^A-Z]|[^A-Za-zñÑáéíóúÁÉÍÓÚ\s]+)/.test(e.target.value)
    ) {
      this.setState({ errorNombre: false });
      console.log(this.state.errorDecripcion);
      !this.state.errorDescripcion
        ? this.setState({ botonAnulado: false })
        : this.setState({ botonAnulado: true });
    } else {
      this.setState({ errorNombre: true });
      this.setState({ botonAnulado: true });
    }
  };

  getDescripcion = e => {
    this.setState({ descripcion: e.target.value });
    if (
      e.target.value !== "" &&
      !/(^[\s]|[^A-Za-z0-9ñÑáéíóúÁÉÍÓÚ()-.,:\s]+)+/.test(e.target.value)
    ) {
      this.setState({ errorDescripcion: false });
      console.log(this.state.errorNombre);
      !this.state.errorNombre
        ? this.setState({ botonAnulado: false })
        : this.setState({ botonAnulado: true });
    } else {
      this.setState({ errorDescripcion: true });
      this.setState({ botonAnulado: true });
    }
  };

  getEstado = e => {
    this.setState({
      estado: e.target.checked
    });
    console.log(this.state);
  };

  nuevo = (nombre, descripcion, estado) => {
    axios.post(
      `https://appaeg.herokuapp.com/api/nuevo/${nombre}/${descripcion}/${estado}`
    );
  };
}

export default NuevaTarea;
