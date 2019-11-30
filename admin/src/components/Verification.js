import React from 'react';
import {connect} from 'react-redux'
import {loadVerification,putStatus} from '../actions'

class Verification extends React.Component {

    constructor(props) {
        super(props);
        this.approveVerification = this.approveVerification.bind(this);
        this.rejectVerification = this.rejectVerification.bind(this);
    }

    componentDidMount() {
        this.props.loadVerification();
    }

    approveVerification(idPantiOrBantu,type) {
        this.props.putStatus(type,idPantiOrBantu,"approved");
    }

    rejectVerification(idPantiOrBantu,type) {
        this.props.putStatus(type,idPantiOrBantu,"rejected");
    }

    render() {
        let rowItems = this.props.verification.map((item,index) => {
            let actionForItem;
            if (item.Status == 'pending') {
                actionForItem = <div>
                                  <button className="btn btn-primary" onClick={() => this.approveVerification(item.OriginId,item.Type)}>Approve</button>&nbsp;
                                  <button className="btn btn-danger" onClick={() => this.rejectVerification(item.OriginId,item.Type)}>Reject</button>
                                </div>;
            } else {
                actionForItem = <div>{item.Status}</div>;
            }
            return (
              <tr>
                <th scope="row">{index}</th>
                <td>{item.Name}</td>
                <td>{item.Title}</td>
                <td>{item.Address}</td>
                <td>{item.Description}</td>
                <td>{item.Photo}</td>
                <td>{item.Location}</td>
                <td>{actionForItem}</td>
              </tr>
            );
        })
        return (
            <div className="content-container">
              <div className="container-fluid">
                <div className="jumbotron">
                    <h4>VERIFIKASI DATA PANTI DAN PEDULI SESAMA</h4>
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Name</th>
                          <th scope="col">Title</th>
                          <th scope="col">Address</th>
                          <th scope="col">Description</th>
                          <th scope="col">Photo</th>
                          <th scope="col">Location</th>
                          <th scope="col">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {rowItems}
                      </tbody>
                    </table>
                </div>
              </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    verification : state.verification
})

const mapDispatchToProps = (dispatch) => ({
    loadVerification : () => (dispatch(loadVerification())),
    putStatus: (type,idPantiOrBantu,status) => (dispatch(putStatus(type,idPantiOrBantu,status)))
})

export default connect (
    mapStateToProps,
    mapDispatchToProps
) (Verification);
