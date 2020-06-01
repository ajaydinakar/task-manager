import React, { Component } from 'react'

export class Task extends Component {


  
    render() {
        return (
            <div>
                <div className="container">
        <table className="table  table-sm table-dark">
            {this.props.tasks.map((task,index )=>
            <tr key={index} >
                 <td > {task.id}    </td>
            <td > {task.taskname}    </td>
            <td > {task.blocking}    </td>
            <td > {task.status}    </td>
            <td > {task.date}    </td>
            <td > {task.mojo}    </td>
            <td > <button onClick= {()=>this.props.delete(index)}>Delete </button></td>
           
            </tr>)
            }
        </table>

        
        </div> 
            </div>
        )
    }
}

export default Task
