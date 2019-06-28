import React, { Component } from 'react';
import { UserDetails } from './UserDetails';
import '../App.css';
export class UserList extends Component {
    constructor() {
        super();
        this.state = {
            users: [
                { id: 1, name: 'wafaa', age: '24', isEdit: false },
                { id: 2, name: 'ali', age: '25', isEdit: false },
                { id: 3, name: 'ahmed', age: '24', isEdit: false },
                { id: 4, name: 'nour', age: '27', isEdit: false },
                { id: 5, name: 'nourhan', age: '20', isEdit: false },
                { id: 6, name: 'mai', age: '28', isEdit: false },
                { id: 7, name: 'mohamed', age: '24', isEdit: false },
                { id: 8, name: 'amr', age: '23', isEdit: false },
                { id: 9, name: 'nora', age: '21', isEdit: false },
                { id: 10, name: 'heba', age: '24', isEdit: false }],
            name: '',
            age: '',
            newName:'',
            newAge:''
        }
    }

    delete = (user) => {
        const index = this.state.users.indexOf(user);
        if (index > -1) {
            this.state.users.splice(index, 1)
            this.setState({ users: this.state.users })
        }
    }
    showEdit= (user)=>{
        const index = this.state.users.indexOf(user);
        if (index > -1) {
            this.state.newName= this.state.users[index].name ;
            this.state.newAge=this.state.users[index].age ;
            this.state.users[index].isEdit = true;
            this.setState({ users: this.state.users })
        }
    }
    handleChange = (key, event) => {
        switch (key) {
            case 'name':
                this.setState({ name: event.target.value });
                break;
            case 'age':
                this.setState({ age: event.target.value });
                break;
            case 'newName':
                this.setState({ newName: event.target.value });
                break;
            case 'newAge':
                this.setState({ newAge: event.target.value });
                break;
            default:
                break;
        }
    }

    add = (event) => {
        event.preventDefault();
        if(this.state.name && this.state.age){

            this.state.users.push({
                id: this.state.users[this.state.users.length - 1].id + 1,
                name: this.state.name,
                age: this.state.age
            });
            this.setState({
                users: this.state.users
            });
        }
    }
    edit=(user)=>{
        debugger
        const index = this.state.users.indexOf(user);
        if (index > -1) {
            this.state.users[index].isEdit = false;
            this.state.users[index].name = this.state.newName;
            this.state.users[index].age = this.state.newAge;
            this.setState({ users: this.state.users })
        }

    }
    render() {
        return (
            <div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(user => {
                                if (!user.isEdit) {
                                    return <UserDetails data={user} deleteData={this.delete.bind(this, user)} editData={this.showEdit.bind(this, user)} />
                                }
                                else {
                                  return  (
                                        <tr>
                                            <td>{user.id}</td>
                                            <td>
                                            <label>
                                                Name:
                                                <input  class="form-control" type="text" name="name" value={this.state.newName} onChange={this.handleChange.bind(this, 'newName')} />
                                            </label>
                                            </td>
                                            <td>
                                            <label>
                                                Age:
                                                <input class="form-control" type="number" name="age" value={this.state.newAge} onChange={this.handleChange.bind(this, 'newAge')} />
                                            </label>
                                            </td>
                                            <td>
                                            <button onClick={this.edit.bind(this,user)} class="margin btn btn-success" >OK</button>
                                            </td>
                                        </tr>
                                    )
                                }
                            })
                        }
                    </tbody>
                </table>
                <form  class="form-group" onSubmit={this.add}>
                    <label className="margin">
                        Name:
                        <input class="form-control" type="text" name="name" value={this.state.name} onChange={this.handleChange.bind(this, 'name')} />
                    </label>
                    <label className="margin">
                        Age:
                        <input class="form-control" type="number" name="age" value={this.state.age} onChange={this.handleChange.bind(this, 'age')} />
                    </label>
                    <input type="submit" value="Submit" class="btn btn-success margin" />
                </form>
            </div>);
    }

}