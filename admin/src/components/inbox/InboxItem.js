import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default class InboxItem extends Component {

    constructor(props){
        super(props)

    }


    render() {
        let { _id, username } = this.props

        return (
            <div>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary={username}
                />
                <Link to={'/chatItem'}><button className="btn btn-primary">CHECK</button></Link>&nbsp;
            </ListItem>
            <Divider variant="inset" component="li" />
            </div>
        )
    }
}