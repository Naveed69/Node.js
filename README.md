import React from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

handleDelete = (index) => {
const newArr = [...this.state.tasks];
let pos = -1;
for (let i = 0; i < newArr.length; i++) {
if (newArr[i].id === index) {
pos = i;
break;
}
}
if (pos === -1) return;
let task = newArr[pos];
console.log(task);
axios.delete(`${config.endpoint}/todos`, { data: task }).then((res) => {
<!-- axios.put(`${config.endpoint}/todos`, { data: updateTask }).then((res) => { -->
console.log("In Frontend", res.data);
});
newArr.splice(pos, 1);
this.setState({ tasks: newArr });
};

handleUpdate = (task) => {
const newArr = [...this.state.tasks];

    let pos = -1;
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i].id === task.id) {
        pos = i;
        break;
      }
    }

    if (pos === -1) return;
    newArr[pos].name = task.name;
    newArr[pos].startDate = task.startDate;
    newArr[pos].endDate = task.endDate;
    let updateTask = newArr[pos];
    console.log(updateTask);
    axios.put(`${config.endpoint}/todos`, { data: updateTask }).then((res) => {
      console.log("Updating In Frontend", res.data);
    });
    this.setState({ tasks: newArr });

};
