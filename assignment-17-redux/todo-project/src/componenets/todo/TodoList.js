import React from 'react';

const TodoList = () => {
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
                            <tr>
                                <td>Sl</td>
                                <td>Task Name</td>
                                <td><button className="btn btn-dark" >Edit</button></td>
                                <td><button className="btn btn-danger" >Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TodoList;