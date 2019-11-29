import React from 'react';
import {connect} from 'react-redux'
import {deleteSesama,editSesama} from '../actions'

class DataSesamaItem extends React.Component {

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
        this.handleNamaSesama = this.handleNamaSesama.bind(this);
        this.handleAlamatSesama = this.handleAlamatSesama.bind(this);
        this.handleJudulSesama = this.handleJudulSesama.bind(this);
        this.handleDeskripsiSesama = this.handleDeskripsiSesama.bind(this);
        this.handleFotoSesama = this.handleFotoSesama.bind(this);
        this.handleLocationSesama = this.handleLocationSesama.bind(this);
        this.clickUpdateButton = this.clickUpdateButton.bind(this);
        this.clickDeleteButton = this.clickDeleteButton.bind(this);
        this.clickSaveButton = this.clickSaveButton.bind(this);
    }

    handleNamaSesama(e) {
        this.setState({nama:e.target.value});
    }

    handleAlamatSesama(e) {
        this.setState({alamat:e.target.value});
    }

    handleJudulSesama(e) {
        this.setState({judul:e.target.value});
    }

    handleDeskripsiSesama(e) {
        this.setState({deskripsi:e.target.value});
    }

    handleFotoSesama(e) {
        this.setState({foto:e.target.value});
    }

    handleLocationSesama(e) {
        this.setState({location:e.target.value});
    }

    clickDeleteButton(idSesama) {
        this.props.deleteSesama(idSesama);
    }

    clickUpdateButton() {
        this.setState({editable:true});
    }

    clickSaveButton(idSesama) {
        this.props.editSesama(idSesama,
                             this.state.nama,
                             this.state.judul,
                             this.state.alamat,
                             this.state.deskripsi,
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

        let namaSesamaField;
        if (this.state.editable) {
            namaSesamaField = <input type="text" value={this.state.nama} onChange={this.handleNamaSesama} />
        } else {
            namaSesamaField = <div>{this.state.nama}</div>
        }

        let alamatSesamaField;
        if (this.state.editable) {
            alamatSesamaField = <input type="text" value={this.state.alamat} onChange={this.handleAlamatSesama} />
        } else {
            alamatSesamaField = <div>{this.state.alamat}</div>
        }

        let judulSesamaField;
        if (this.state.editable) {
            judulSesamaField = <input type="text" value={this.state.judul} onChange={this.handleJudulSesama} />
        } else {
            judulSesamaField = <div>{this.state.judul}</div>
        }

        let deskripsiSesamaField;
        if (this.state.editable) {
            deskripsiSesamaField = <input type="text" value={this.state.deskripsi} onChange={this.handleDeskripsiSesama} />
        } else {
            deskripsiSesamaField = <div>{this.state.deskripsi}</div>
        }

        let fotoField;
        if (this.state.editable) {
            fotoField = <input type="text" value={this.state.foto} onChange={this.handleFotoSesama} />
        } else {
            fotoField = <div>{this.state.foto}</div>
        }

        let locationField;
        if (this.state.editable) {
            locationField = <input type="text" value={this.state.location} onChange={this.handleLocationSesama} />
        } else {
            locationField = <div>{this.state.location}</div>
        }

        return (
            <tr>
              <th scope="row">{this.props.index}</th>
              <td>{namaSesamaField}</td>
              <td>{alamatSesamaField}</td>
              <td>{judulSesamaField}</td>
              <td>{deskripsiSesamaField}</td>
              <td>{fotoField}</td>
              <td>{locationField}</td>
              <td>{actionForItem}</td>
            </tr>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    deleteSesama : (idSesama) => (dispatch(deleteSesama(idSesama))),
    editSesama : (idSesama,nama,judul,alamat,deskripsi,foto,location) => (dispatch(editSesama(idSesama,nama,judul,alamat,deskripsi,foto,location)))
})

export default connect(
    null,
    mapDispatchToProps
) (DataSesamaItem)
