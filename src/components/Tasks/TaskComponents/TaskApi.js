import React, { Component } from 'react'

import API from '../../api/Api';
export class TaskApi extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        tasks:[],
        task:{ "taskname": '',
        "status": '',
        "blocking": '',
        "date": '',
        "mojo": ''},
        updateForm:true,
        newTaskForm:true,
      }
      this.onchangeHandler = this.onchangeHandler.bind(this);
      this.onSubmit=this.onSubmit.bind(this);
      this.deleteHandler=this.deleteHandler.bind(this);
    }
    
    componentDidMount() {
      API.get('/tasks')
      .then(res=>{
          const tasks=res.data;
          this.setState({tasks});
      })
    }
    onSubmit(e) {
      e.preventDefault();
      console.log(this.state.task)
      const task = this.state.task;
      API.post('/tasks',task).then(res=>console.log(res.data));
      this.setState({
        tasks:[...this.state.tasks, this.state.task],
        task:{ "taskname": '',
        "status": '',
        "blocking": '',
        "date": '',
        "mojo": ''},
        
      })
     
    }

    onUpdate(e) {
      e.preventDefault();
      console.log(this.state.task)
      const task = this.state.task;
      API.put('/tasks',task).then(res=>console.log(res.data));
      this.setState({
        tasks:[...this.state.tasks, this.state.task],
        task:{ "taskname": '',
        "status": '',
        "blocking": '',
        "date": '',
        "mojo": ''},
        
      })
     
    }

    onchangeHandler = (propertyName) => (event) => {
      event.preventDefault();
      const { task } = this.state;
      const newtask = {
        ...task,
        [propertyName]: event.target.value
      };
      this.setState({ task: newtask });
      
    }
    deleteHandler=async (index,id)=> {
 
      console.log("object")
      let tasks={};
     const res=await API.delete('/tasks/'+id).then(
    
        
        tasks=this.state.tasks.filter((task1,index1)=>index1!==index),
            
            this.setState({tasks:tasks})
     );
};
  render() {
    return (
      <div>
<div className="container">
             <form  onSubmit={this.onSubmit}>
<input type="text " onChange={this.onchangeHandler("taskname")} name="taskname"  value={this.state.task.taskname}></input>
<input type="text " onChange={this.onchangeHandler("status")} value= {this.state.task.status}   ></input>
<input type="text " onChange={this.onchangeHandler("blocking")} value= {this.state.task.blocking}  ></input>                        
<input type="text " onChange={this.onchangeHandler("date")} value= {this.state.task.date}  ></input>
<input type="text " onChange={this.onchangeHandler("mojo")} value= {this.state.task.mojo}  ></input>
<input type="submit" value="submit" ></input>
</form>

            </div>

            <div className="container">
             <form  onSubmit={this.onSubmit}>
<input type="text " onChange={this.onchangeHandler("taskname")} value={this.state.task.taskname}></input>
<input type="text " onChange={this.onchangeHandler("status")} value= {this.state.task.status}   ></input>
<input type="text " onChange={this.onchangeHandler("blocking")} value= {this.state.task.blocking}  ></input>                        
<input type="text " onChange={this.onchangeHandler("date")} value= {this.state.task.date}  ></input>
<input type="text " onChange={this.onchangeHandler("mojo")} value= {this.state.task.mojo}  ></input>
<input type="submit" value="submit" ></input>
</form>

            </div>

         <div className="container">
        <table className="table  table-sm table-dark">
            {this.state.tasks.map((task,index)=>
            <tr>
            <td > {task.taskname}    </td>
            <td > {task.blocking}    </td>
            <td > {task.status}    </td>
            <td > {task.date}    </td>
            <td > {task.mojo}    </td>
            <td > <button onClick= {()=>this.deleteHandler(index,task.id)}>Delete </button>
            <button onClick= {()=>this.onUpdate(index,task.id)}>Update </button></td>
           
            </tr>)
            }
        </table>
        </div> 
      </div>
    )
  }
}

export default TaskApi
