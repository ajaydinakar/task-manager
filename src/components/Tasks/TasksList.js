import React, { Component } from 'react'
import Task from './TaskComponents/Task';
import Form from '../form/Form';

export class TasksList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             tasks:[{
                "taskname": "Enabling flex flow for PE",
                "id": 1,
                "status": "In Progress",
                "blocking": "Yes",
                "date": "10/19/19",
                "mojo": null
              },
              {
                "taskname": "Standalone RPC",
                "id": 2,
                "status": "In Progress",
                "blocking": "No",
                "date": "10/19/19",
                "mojo": null
              },
              {
                "taskname": "Customfit Addtional Info Page",
                "id": 3,
                "status": "In Progress",
                "blocking": "No",
                "date": "10/19/19",
                "mojo": null
              },
              {
                "taskname": "EID",
                "id": 4,
                "status": "In Progress",
                "blocking": "No",
                "date": "10/19/19",
                "mojo": null
              },
              {
                "taskname": "Generate new DP Contract",
                "id": 9,
                "status": "In Progress",
                "blocking": "Yes",
                "date": "10/19/19",
                "mojo": null
              },
              {
                "taskname": "Customfit 5G",
                "id": 8,
                "status": "In Progress",
                "blocking": "Yes",
                "date": "10/19/19",
                "mojo": null
              },
              {
                "taskname": "Enabling Flex flow for PE customers in telesales external",
                "id": 10,
                "status": "In Progress",
                "blocking": "Yes",
                "date": "10/19/19",
                "mojo": null
              }
            ],
            task:{ "taskname": '',
            "status": "In Progress",
            "blocking": "Yes",
            "date": "10/19/19",
            "mojo": null},
            isShown:false,
          
        }
        this.onchangeHandler = this.onchangeHandler.bind(this);
        
    }
    onchangeHandler = (propertyName) => (event) => {
        event.preventDefault();
        const { task } = this.state;
        const newtask = {
          ...task,
          [propertyName]: event.target.value
        };
        this.setState({ task: newtask });
        console.log(this.state.task)
        console.log(newtask)
      }
    
    onSubmitHandler=(e)=>{
        e.preventDefault();
      this.setState({
        tasks:[...this.state.tasks, this.state.task],
        task:{},
        
      })
      }


    

      deleteHandler=index=> {
            console.log("object")
            const tasks=this.state.tasks.filter((task1,index1)=>index1!==index);
            
            this.setState({tasks:tasks})
  };
    render() {
        return (
            <div className="container">
             <form  onSubmit={this.onSubmitHandler}>
<input type="text " onChange={this.onchangeHandler("taskname")} value={this.state.task.taskname}></input>
<input type="text " onChange={this.onchangeHandler("id")} value= {this.state.task.id}  ></input>
<input type="text " onChange={this.onchangeHandler("statis")} value= {this.state.task.status}   ></input>
<input type="text " onChange={this.onchangeHandler("blocking")} value= {this.state.task.blocking}  ></input>                        
<input type="text " onChange={this.onchangeHandler("date")} value= {this.state.task.date}  ></input>
<input type="text " onChange={this.onchangeHandler("mojo")} value= {this.state.task.mojo}  ></input>
<input type="submit" value="submit" ></input>
</form>

                <Task tasks={this.state.tasks}  delete={(index)=>this.deleteHandler(index)} ></Task>
            </div>
        )
    }
}

export default TasksList
