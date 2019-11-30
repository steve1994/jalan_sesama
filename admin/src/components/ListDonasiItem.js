import React from 'react';
import {connect} from 'react-redux'
import {setNominal,putStatusAnggaran} from '../actions'

class ListDonasiItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {editable:false,nominalGalang:this.props.nominalGalang,status:this.props.status}
        this.handleNominalGalang = this.handleNominalGalang.bind(this);
        this.saveGalangDana = this.saveGalangDana.bind(this);
        this.clickApproveButton = this.clickApproveButton.bind(this);
        this.clickRejectButton = this.clickRejectButton.bind(this);
    }

    handleNominalGalang(e) {
        this.setState({nominalGalang:e.target.value});
    }

    saveGalangDana(originId,nominal) {
        this.props.setNominal(originId,nominal);
        this.props.putStatusAnggaran(originId,'approved');
        this.setState({editable:false,status:'approved'})
    }

    clickApproveButton() {
        this.setState({editable:true,nominalGalang:this.props.nominalGalang});
    }

    clickRejectButton(originId) {
        this.props.putStatusAnggaran(originId,'rejected');
        this.setState({editable:false,status:'rejected'});
    }

    render() {
        let actionForItem;
        if (this.state.status == 'pending') {
            if (this.state.editable) {
                actionForItem = <div>
                                    <button className="btn btn-primary" onClick={() => this.saveGalangDana(this.props.origin_id,this.state.nominalGalang)}>Save</button>
                                </div>
            } else {
                actionForItem = <div>
                                    <button className="btn btn-primary" onClick={() => this.clickApproveButton()}>Approve</button>&nbsp;
                                    <button className="btn btn-danger" onClick={() => this.clickRejectButton(this.props.origin_id)}>Reject</button>
                                </div>
            }
        } else {
            actionForItem = <div>{this.state.status}</div>
        }
        let nominalPenggalanganInput;
        if (this.state.editable) {
            nominalPenggalanganInput = <div>
                                            <input type="text" value={this.state.nominalGalang} onChange={this.handleNominalGalang} />
                                       </div>
        } else {
            nominalPenggalanganInput = <div>{this.state.nominalGalang}</div>
        }
        return (
            <tr>
              <th scope="row">{this.props.index}</th>
              <td>{this.props.namaPantiOrBantu}</td>
              <td>{this.props.namaGalangDana}</td>
              <td>{this.props.alamat}</td>
              <td>{this.props.judul}</td>
              <td>{this.props.deskripsi}</td>
              <td>{this.props.foto}</td>
              <td>{nominalPenggalanganInput}</td>
              <td>{actionForItem}</td>
            </tr>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
     setNominal : (idGalangDana,nominal) => (dispatch(setNominal(idGalangDana,nominal))),
     putStatusAnggaran : (idGalangDana,status) => (dispatch(putStatusAnggaran(idGalangDana,status)))
})

export default connect(
    null,
    mapDispatchToProps
) (ListDonasiItem)
