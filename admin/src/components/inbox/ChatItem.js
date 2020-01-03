import React, { Component } from 'react';
import FormInput from './FormInput';
import ListItem from './ListItem';


var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + ' ' + time;


export default class ChatItem extends Component {

    constructor(props) {
        super(props);
        this.state = { name: '', message: '', dateTime: `${dateTime}`, chatID: `${Date.now()}` };


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name
        this.setState({ [name]: event.target.value });
    }

    handleSubmit(event) {

    }

    render() {
        return (
            <div className="content-container">
                <div className="container-fluid">
                    <div className="jumbotron">
                        <h4>Messages</h4>
                        <div class="card-body">
                            <ListItem data={this.state.data} />
                            <br />
                            <FormInput inputSave={this.inputSave} />
                        </div>

                    </div>
                </div>
            </div>

        )
    }


}


