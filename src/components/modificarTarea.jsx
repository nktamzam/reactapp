import React, { Component } from "react";
import axios from "axios";

class ModificarTarea extends Component {
  state = {
    id: "",
    nombre: "",
    descripcion: "",
    estado: "",
    botonAnulado: false,
    errorNombre: false,
    errorDescripcion: false
  };

  render() {
    console.log("this.props.id", this.props.id);
    return (
      <div>
        <h1>Modificar tarea</h1>
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
              title="Sólo letras y signos de puntuación."
            />
          </div>
          <div className="form-group">
            <div className="form-check">
              <input
                type="checkbox"
                key="inputEstado"
                id="inputEstado"
                checked={this.state.estado}
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
              key="botonModificar"
              className="btn btn-success"
              onClick={() => {
                this.modificar(
                  this.state.id,
                  this.state.nombre,
                  this.state.descripcion,
                  this.state.estado
                );
              }}
            >
              Modificar tarea
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
  };

  componentDidMount() {
    axios.get(`https://appaeg.herokuapp.com/api/${this.props.id}`).then(res => {
      this.setState({
        id: res.data.tarea._id,
        nombre: res.data.tarea.nombre,
        descripcion: res.data.tarea.descripción,
        estado: res.data.tarea.estado
      });
    });
  }

  modificar = (id, nombre, descripcion, estado) => {
    axios.put(
      `https://appaeg.herokuapp.com/api/${id}/${nombre}/${descripcion}/${estado}`
    );
  };
}

export default ModificarTarea;
