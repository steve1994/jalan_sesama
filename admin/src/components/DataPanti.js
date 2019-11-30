import React from 'react';
import DataPantiItem from './DataPantiItem';
import {connect} from 'react-redux'
import {loadPanti} from '../actions'

class DataPanti extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadPanti();
    }

    render() {
        let listPanti = this.props.panti.map((item,index) => {
            return (<DataPantiItem index={index+1}
                                   origin_id={item.OriginId}
                                   nama={item.Nama}
                                   alamat={item.Alamat}
                                   judul={item.Judul}
                                   deskripsi={item.Deskripsi}
                                   jumlahOrang={item.JumlahOrang}
                                   foto={item.Photo}
                                   location={item.Location} />)
        })
        return (
          <div className="content-container">
            <div className="container-fluid">
              <div className="jumbotron">
                <h4>PANTI ASUHAN TERDAFTAR</h4>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Nama Panti</th>
                      <th scope="col">Alamat</th>
                      <th scope="col">Judul</th>
                      <th scope="col">Deskripsi</th>
                      <th scope="col">Jumlah Orang</th>
                      <th scope="col">Foto</th>
                      <th scope="col">Location</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listPanti}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
    }
}

const mapStateToProps = (state) => ({
    panti : state.panti
})

const mapDispatchToProps = (dispatch) => ({
    loadPanti : () => (dispatch(loadPanti()))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (DataPanti)
