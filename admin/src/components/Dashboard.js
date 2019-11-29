import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

export default class Dashboard extends React.Component {
    render() {
        return (
            <div className="content-container">
              <div className="container-fluid">
                <div className="jumbotron">
                    <Link to={'/verification'}><button className="btn btn-primary">Verification</button></Link>&nbsp;
                    <Link to={'/datapanti'}><button className="btn btn-success">Data Panti</button></Link>&nbsp;
                    <Link to={'/datasesama'}><button className="btn btn-warning">Data Sesama</button></Link>&nbsp;
                    <Link to={'/listdonasi'}><button className="btn btn-info">List Donasi</button></Link>
                </div>
              </div>
            </div>
        );
    }
}
