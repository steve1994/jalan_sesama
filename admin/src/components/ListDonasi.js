import React from 'react';
import ListDonasiItem from './ListDonasiItem'
import {connect} from 'react-redux'
import {loadAnggaran} from '../actions'

class ListDonasi extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.loadAnggaran();
    }

    render() {
        let listAnggaran = this.props.anggaran.map((item,index) => {
            return (<ListDonasiItem origin_id={item.OriginId}
                                    index={index}
                                    namaPantiOrBantu={item.NamaPantiOrBantu}
                                    namaGalangDana={item.NamaGalangDana}
                                    alamat={item.Alamat}
                                    judul={item.Judul}
                                    deskripsi={item.Deskripsi}
                                    foto={item.Foto}
                                    nominalGalang={item.NominalGalang}
                                    status={item.Status} />);
        })
        return (
          <div className="content-container">
            <div className="container-fluid">
              <div className="jumbotron">
                  <h4>VERIFIKASI LIST GALANG DANA</h4>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nama Panti/Sesama</th>
                        <th scope="col">Nama Galang Dana</th>
                        <th scope="col">Alamat</th>
                        <th scope="col">Judul</th>
                        <th scope="col">Deskripsi</th>
                        <th scope="col">Foto</th>
                        <th scope="col">Nominal Penggalangan (IDR)</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listAnggaran}
                    </tbody>
                  </table>
              </div>
            </div>
          </div>
        );
    }
}

const mapStateToProps = (state) => ({
    anggaran : state.anggaran
})

const mapDispatchToProps = (dispatch) => ({
    loadAnggaran : () => (dispatch(loadAnggaran()))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (ListDonasi)
