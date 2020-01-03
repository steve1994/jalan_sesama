import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import Dashboard from './Dashboard';
import Inbox from '../container/Inbox/Inbox';
import Notification from './Notification';
import Verification from './Verification';
import DataPanti from './DataPanti';
import DataSesama from './DataSesama';
import ListDonasi from './ListDonasi';
import Login from './Login';
import Register from './Register';
import ChatItem from '../container/Inbox/ChatItem';

export default class OneWholeMenu extends React.Component {

    constructor(props) {
        super(props);
        this.clickSignOutButton = this.clickSignOutButton.bind(this);
    }

    clickSignOutButton(e) {
        e.preventDefault()
        localStorage.removeItem("user");
        window.location.replace('/');
    }

    render() {
        let sideMenuComponent;
        if (localStorage.getItem("user")) {
            sideMenuComponent = <div className="sidebar-container">
                                  <div className="sidebar-logo">
                                    Jalan_Sesama Admin
                                  </div>
                                  <ul className="sidebar-navigation">
                                    <li>
                                      <Link to={'/'}>
                                        <i className="fa fa-tachometer" aria-hidden="true"></i> Dashboard
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to={'/notification'}>
                                        <i className="fa fa-users" aria-hidden="true"></i> Notification
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to={'/inbox'}>
                                        <i className="fa fa-cog" aria-hidden="true"></i> Inbox
                                      </Link>
                                    </li>
                                    <li>
                                      <button className="btn btn-danger" onClick={this.clickSignOutButton}>Sign Out</button>
                                    </li>
                                  </ul>
                                </div>
        } else {
            sideMenuComponent = <div></div>
        }

        return (
            <Router>
              <div>
                  {sideMenuComponent}
                  <Switch>
                    <Route exact path="/">
                        {localStorage.getItem("user") ? <Dashboard /> : <Redirect to="/login" />}
                    </Route>
                    <Route path="/inbox">
                        {localStorage.getItem("user") ? <Inbox /> : <Redirect to="/login" />}
                    </Route>
                    <Route path="/notification">
                        {localStorage.getItem("user") ? <Notification /> : <Redirect to="/login" />}
                    </Route>
                    <Route path="/verification">
                        {localStorage.getItem("user") ? <Verification /> : <Redirect to="/login" />}
                    </Route>
                    <Route path="/datapanti">
                        {localStorage.getItem("user") ? <DataPanti /> : <Redirect to="/login" />}
                    </Route>
                    <Route path="/datasesama">
                        {localStorage.getItem("user") ? <DataSesama /> : <Redirect to="/login" />}
                    </Route>
                    <Route path="/listdonasi">
                        {localStorage.getItem("user") ? <ListDonasi /> : <Redirect to="/login" />}
                    </Route>
                    <Route path="/login">
                        {localStorage.getItem("user") ? <Redirect to='/' /> : <Login />}
                    </Route>
                    <Route path="/register">
                        {localStorage.getItem("user") ? <Redirect to='/' /> : <Register />}
                    </Route>
                    <Route path="/chatItem">
                        {localStorage.getItem("user") ? <ChatItem /> : <Redirect to="/login" />}
                    </Route>
                  </Switch>

                </div>
            </Router>
        );
    }
}
