import React, { Component } from 'react';


class Mensaje extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Hola: ' + this.state.value);
        event.preventDefault();
      }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        <p/>
        ¡Hola!
      </form>
        )
    }
  }

 
  export default Mensaje;