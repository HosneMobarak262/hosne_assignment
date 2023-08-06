import React from 'react';
import {useSelector} from "react-redux";
import {TodoDeleteAlert} from "./TodoDeleteAlert";
import {TodoEditAlert} from "./TodoEditAlert";

const TodoList = () => {

    const todoItems=useSelector((state)=>state.todo.value);


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Sl</th>
                                <th>Task Name</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            todoItems.map((item, i)=>{
                                return (
                                    <tr key={i.toString()}>
                                        <td>{i}</td>
                                        <td>{item}</td>
                                        <td><button onClick={()=>{TodoEditAlert(i, item)}} className="btn btn-dark" >Edit</button></td>
                                        <td><button onClick={()=>{TodoDeleteAlert(i)}} className="btn btn-danger" >Delete</button></td>
                                    </tr>
                                )
                            })
                        }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TodoList;