import React from "react";
import "./todo.scss";
import AddComponent from "./addComponent";
import { ToastContainer, toast } from "react-toastify";

import Color from "../HOC/Color";

class todoComponent extends React.Component {
  state = {
    arrJob: [
      { id: "a1", job: "coder" },
      { id: "a2", job: "gammer" },
      { id: "a3", job: "player" },
    ],
    editToodo: {},
  };

  addJob = (newjob) => {
    this.setState({
      arrJob: [...this.state.arrJob, newjob],
    });
  };

  handleDelete = (itemJob) => {
    let currentJob = this.state.arrJob;
    currentJob = currentJob.filter((item) => {
      return item.id !== itemJob.id;
    });
    this.setState({
      arrJob: currentJob,
    });
    toast.success("Delete successful");
  };

  handleEditTodo = (todo) => {
    console.log('todo', todo)
    let { editToodo, arrJob } = this.state;
    let isEmotyObj = Object.keys(todo).length === 0;
    //save
    if (isEmotyObj === false && editToodo.id === todo.id) {
      let arrJobCopy = [...arrJob]
      console.log("arrJobCopy", arrJobCopy)
      //Find index of specific object using findIndex method.
      let objIndex = arrJobCopy.findIndex((item) => item.id == todo.id);
      console.log('objIndex', objIndex)
      //Log object to Console.
      console.log("Before update: ", arrJobCopy[objIndex]);

      //Update object's name property.
      arrJobCopy[objIndex].job = editToodo.job;

      if (editToodo.job === '') {
        toast.error('Missing value')
      } else {
        arrJobCopy[objIndex].job = editToodo.job;
        this.setState({
          arrJob: arrJobCopy,
          editToodo: {}
        })
        toast.success('Edit successful')
      }
      return;
    }
    //edit
    this.setState({
      editToodo: todo,
    });
  };

  handleOnchangeEditTodo = (event) => {
    let editJobCopy = this.state.editToodo;
    editJobCopy.job = event.target.value;
    this.setState({
      editToodo: editJobCopy,
    });
  };

  handleCancel = (event, item) => {
    console.log('ccc', item)
    if (this.state.editToodo.job === '') {
      toast.error('Missing value');
    } else {
      this.setState({
        editToodo: {}
      });
    }
  };


  render() {
    const { arrJob, editToodo } = this.state;
    console.log(editToodo);
    let isEmotyObj = Object.keys(editToodo).length === 0;
    console.log("check empty obj :", isEmotyObj);
    return (
      <div className="todo-container">
        <AddComponent addJob={this.addJob} />
        <div className="list-todo">
          {arrJob &&
            arrJob.length > 0 &&
            arrJob.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  {isEmotyObj === true ? (
                    <span>
                      {index + 1} - {item.job}
                    </span>
                  ) : (
                    <>
                      {item.id === editToodo.id ? (
                        <span>
                          {index + 1} -{" "}
                          {
                            <input
                              type="text"
                              value={editToodo.job}
                              onChange={(e) => {
                                this.handleOnchangeEditTodo(e);
                              }}
                            />
                          }
                        </span>
                      ) : (
                        <span>
                          {index + 1} - {item.job}
                        </span>
                      )}
                    </>
                  )}
                  <></>{" "}
                  <button
                    className="btn-edit"
                    onClick={() => {
                      this.handleEditTodo(item);
                    }}
                  >
                    {isEmotyObj === false && item.id === editToodo.id
                      ? "Save"
                      : "Edit"}
                  </button>
                  <></>{" "}
                  <button
                    className="btn-delete"
                    onClick={() => {
                      this.handleDelete(item);
                    }}
                  >
                    Delete
                  </button>
                  <></>{" "}
                  <button onClick={(e) => { this.handleCancel(e, item) }}>Cancel</button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
export default Color(todoComponent);
