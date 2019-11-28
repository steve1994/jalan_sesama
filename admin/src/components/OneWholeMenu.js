import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Dashboard from './Dashboard';
import Inbox from './Inbox';
import Notification from './Notification';
import Verification from './Verification';
import DataPanti from './DataPanti';
import ListDonasi from './ListDonasi';

export default class OneWholeMenu extends React.Component {
    render() {
        return (
            <Router>
              <div>
                <div className="sidebar-container">
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
                  </ul>
                  </div>

                  <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/inbox" component={Inbox} />
                    <Route path="/notification" component={Notification} />
                    <Route path="/verification" component={Verification} />
                    <Route path="/datapanti" component={DataPanti} />
                    <Route path="/listdonasi" component={ListDonasi} />
                  </Switch>

                </div>
            </Router>
        );
    }
}
