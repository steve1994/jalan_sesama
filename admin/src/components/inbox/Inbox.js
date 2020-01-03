import React, { Component } from 'react';
// import 'react-chat-elements/dist/main.css';
// import { ChatList } from 'react-chat-elements';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';


import InboxItem from '../../container/Inbox/InboxItem';

export default class Inbox extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadMessage()
  }

  render() {
    let { loadChatSuccess } = this.props


    return (
      <div className="content-container">
        <div className="container-fluid">
          <div className="jumbotron">
            <h4>Messages</h4>
            <List className={useStyles.root}>

              {loadChatSuccess.map((items) => {
                return (
                  <InboxItem
                    navigation={this.props.navigation}
                    {...items}
                  />

                )


              })}

            </List>
          </div>
        </div>
      </div>

    )
  }


}
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 100,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));