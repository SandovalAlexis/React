//Snipet : imrc
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";

//Snipet : ccc
class TodoList extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        tareaNueva : "",
        tareas : [
            {id: 1, nombre:"Estudiar Programacion", done:false},
            {id: 2, nombre:"Practicar funciones", done:false},
            {id: 3, nombre:"Ir al Gymnasio", done:false}
        ]
     }
    
    agregarTarea(){
        if (this.state.tareaNueva.length>0){
            this.setState({
                tareaNueva : '',
                tareas : [
                    ...this.state.tareas,
                    {
                        id: Math.max(0,...this.state.tareas.map(t=>t.id))+1,
                        nombre : this.state.tareaNueva,
                        done:false
                    }
                ]
            })
        }
    }

    eliminarTarea(id){
        this.setState({
            tareas : this.state.tareas.filter( tarea => tarea.id !== id)
        })
    }

    render() { 
        return (<>
            <ul className='list-group w-50 mx-auto'>
                <li key="Titulo" className='list-group-item active'>Lista de Tareas</li>
                {
                    this.state.tareas.map( (tarea)=>(
                        <li key={tarea.id} className='list-group-item'>
                            {tarea.nombre}

                            <button className='btn btn-danger float-end'
                                onClick={ this.eliminarTarea.bind(this, tarea.id)}>
                            &#128465;
                            </button>
                        </li>
                    ))
                }
                <li key="botonera" className='list-group-item'>
                    <div className='input-group'>
                        <input type="text" 
                            onChange={ (e)=>{ 
                                this.setState({
                                    tareaNueva : e.target.value
                                })
                            }}
                            onKeyDown={
                                (e)=>{
                                    if (e.key === "Enter") { this.agregarTarea() }
                                }
                            }
                            value={this.state.tareaNueva}
                            className='form-control'
                            placeholder='Ingrese una tarea nueva' />

                        <button className='btn btn-outline-success'
                        onClick={this.agregarTarea.bind(this)}>
                            +
                        </button>
                    </div>
                </li>
            </ul>
        </>);
    }
}
 
export default TodoList;