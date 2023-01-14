import React, { Component } from 'react';

class ContadorClase extends Component {
    constructor(props) {
        super(props);
    }

    state = { calorias:0 }

    incrementar(){
       this.setState({calorias : this.state.calorias+1});
    }

    render() { 
        return (<div className='text-center m-3'>
            <h3>Calorias { this.state.calorias}</h3>
            <button className="btn btn-primary" onClick={this.incrementar.bind(this)}>+</button>
            <button className="btn btn-danger" onClick={()=>{this.setState({calorias:this.state.calorias-1})}}>
                -
            </button>
        </div>);
    }
}
 
export default ContadorClase;