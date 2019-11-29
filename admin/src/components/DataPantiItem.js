import React from 'react';
import {connect} from 'react-redux'
import {deletePanti,editPanti,deleteAnggaranPanti} from '../actions'

class DataPantiItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {editable:false,
                      nama:this.props.nama,
                      alamat:this.props.alamat,
                      judul:this.props.judul,
                      deskripsi:this.props.deskripsi,
                      jumlahOrang:this.props.jumlahOrang,
                      foto:this.props.foto,
                      location:this.props.location};
        this.handleNamaPanti = this.handleNamaPanti.bind(this);
        this.handleAlamatPanti = this.handleAlamatPanti.bind(this);
        this.handleJudulPanti = this.handleJudulPanti.bind(this);
        this.handleDeskripsiPanti = this.handleDeskripsiPanti.bind(this);
        this.handleJumlahOrangPanti = this.handleJumlahOrangPanti.bind(this);
        this.handleFotoPanti = this.handleFotoPanti.bind(this);
        this.handleLocationPanti = this.handleLocationPanti.bind(this);
        this.clickUpdateButton = this.clickUpdateButton.bind(this);
        this.clickDeleteButton = this.clickDeleteButton.bind(this);
        this.clickSaveButton = this.clickSaveButton.bind(this);
    }

    handleNamaPanti(e) {
        this.setState({nama:e.target.value});
    }

    handleAlamatPanti(e) {
        this.setState({alamat:e.target.value});
    }

    handleJudulPanti(e) {
        this.setState({judul:e.target.value});
    }

    handleDeskripsiPanti(e) {
        this.setState({deskripsi:e.target.value});
    }

    handleJumlahOrangPanti(e) {
        this.setState({jumlahOrang:e.target.value});
    }

    handleFotoPanti(e) {
        this.setState({foto:e.target.value});
    }

    handleLocationPanti(e) {
        this.setState({location:e.target.value});
    }

    clickDeleteButton(idPanti) {
        this.props.deletePanti(idPanti);
        this.props.deleteAnggaranPanti(idPanti);
    }

    clickUpdateButton() {
        this.setState({editable:true});
    }

    clickSaveButton(idPanti) {
        this.props.editPanti(idPanti,
                             this.state.nama,
                             this.state.judul,
                             this.state.alamat,
                             this.state.deskripsi,
                             this.state.jumlahOrang,
                             this.state.foto,
                             this.state.location);
        this.setState({editable:false});
    }

    render() {
        let actionForItem;
        if (this.state.editable) {
            actionForItem = <div>
                                <button className="btn btn-primary" onClick={() => this.clickSaveButton(this.props.origin_id)}>Save</button>
                            </div>
        } else {
            actionForItem = <div>
                                <button className="btn btn-primary" onClick={() => this.clickUpdateButton()}>Update</button>&nbsp;
                                <button className="btn btn-danger" onClick={() => this.clickDeleteButton(this.props.origin_id)}>Delete</button>
                            </div>
        }

        let namaPantiField;
        if (this.state.editable) {
            namaPantiField = <input type="text" value={this.state.nama} onChange={this.handleNamaPanti} />
        } else {
            namaPantiField = <div>{this.state.nama}</div>
        }

        let alamatPantiField;
        if (this.state.editable) {
            alamatPantiField = <input type="text" value={this.state.alamat} onChange={this.handleAlamatPanti} />
        } else {
            alamatPantiField = <div>{this.state.alamat}</div>
        }

        let judulPantiField;
        if (this.state.editable) {
            judulPantiField = <input type="text" value={this.state.judul} onChange={this.handleJudulPanti} />
        } else {
            judulPantiField = <div>{this.state.judul}</div>
        }

        let deskripsiPantiField;
        if (this.state.editable) {
            deskripsiPantiField = <input type="text" value={this.state.deskripsi} onChange={this.handleDeskripsiPanti} />
        } else {
            deskripsiPantiField = <div>{this.state.deskripsi}</div>
        }

        let jumlahOrangPantiField;
        if (this.state.editable) {
            jumlahOrangPantiField = <input type="text" value={this.state.jumlahOrang} onChange={this.handleJumlahOrangPanti} />
        } else {
            jumlahOrangPantiField = <div>{this.state.jumlahOrang}</div>
        }

        let fotoField;
        if (this.state.editable) {
            fotoField = <input type="text" value={this.state.foto} onChange={this.handleFotoPanti} />
        } else {
            fotoField = <div>{this.state.foto}</div>
        }

        let locationField;
        if (this.state.editable) {
            locationField = <input type="text" value={this.state.location} onChange={this.handleLocationPanti} />
        } else {
            locationField = <div>{this.state.location}</div>
        }

        return (
            <tr>
              <th scope="row">{this.props.index}</th>
              <td>{namaPantiField}</td>
              <td>{alamatPantiField}</td>
              <td>{judulPantiField}</td>
              <td>{deskripsiPantiField}</td>
              <td>{jumlahOrangPantiField}</td>
              <td>{fotoField}</td>
              <td>{locationField}</td>
              <td>{actionForItem}</td>
            </tr>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    deletePanti : (idPanti) => (dispatch(deletePanti(idPanti))),
    editPanti : (idPanti,nama,judul,alamat,deskripsi,jumlahOrang,foto,location) => (dispatch(editPanti(idPanti,nama,judul,alamat,deskripsi,jumlahOrang,foto,location))),
    deleteAnggaranPanti : (idPanti) => (dispatch(deleteAnggaranPanti(idPanti)))
})

export default connect(
    null,
    mapDispatchToProps
) (DataPantiItem)
