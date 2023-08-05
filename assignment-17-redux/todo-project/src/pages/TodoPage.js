import React from 'react';
import CreateTodo from "../componenets/todo/CreateTodo";

const TodoPage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h5>My Todo App</h5>
                        </div>
                        <div className="card-body">
                            <CreateTodo></CreateTodo>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoPage;