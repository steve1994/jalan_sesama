import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {loadNotification} from '../actions'

class Notification extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadNotification();
    }

    addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    render() {
        let listNotification = this.props.notification.map((item,index) => {
            let buttonComponent;
            if (item.type == "anggaran") {
                buttonComponent = <Link to={'/listdonasi'}><button className="btn btn-success">Go to Anggaran Page</button></Link>;
            } else {
                buttonComponent = <Link to={'/verification'}><button className="btn btn-success">Go to Verification Page</button></Link>;
            }
            let createdAt = new Date(item.created_at);
            let date = createdAt.getFullYear() + '-' + this.addZero(createdAt.getMonth()+1) + '-' + this.addZero(createdAt.getDate());
            let time = this.addZero(createdAt.getHours()) + ':' + this.addZero(createdAt.getMinutes()) + ':' + this.addZero(createdAt.getSeconds());
            return <div>{date}&nbsp;{time} &nbsp;&nbsp;&nbsp;&nbsp; {item.notification_name} &nbsp;&nbsp;&nbsp;&nbsp; {buttonComponent}</div>
        })
        return (
          <div className="content-container">
            <div className="container-fluid">
              <div className="jumbotron">
                <h4>Approval Notification</h4>
                {listNotification}
              </div>
            </div>
          </div>
        );
    }
}

const mapStateToProps = (state) => ({
    notification : state.notification
})

const mapDispatchToProps = (dispatch) => ({
    loadNotification : () => (dispatch(loadNotification()))
})

export default connect (
    mapStateToProps,
    mapDispatchToProps
) (Notification)
