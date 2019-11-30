import React from 'react';
import DataSesamaItem from './DataSesamaItem';
import {connect} from 'react-redux'
import {loadSesama} from '../actions'

class DataSesama extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadSesama();
    }

    render() {
        let listSesama = this.props.sesama.map((item,index) => {
            return (<DataSesamaItem index={index+1}
                                   origin_id={item.OriginId}
                                   nama={item.Nama}
                                   alamat={item.Alamat}
                                   judul={item.Judul}
                                   deskripsi={item.Deskripsi}
                                   foto={item.Photo}
                                   location={item.Location} />)
        })
        return (
          <div className="content-container">
            <div className="container-fluid">
              <div className="jumbotron">
                <h4>SESAMA TERDAFTAR</h4>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Nama</th>
                      <th scope="col">Alamat</th>
                      <th scope="col">Judul</th>
                      <th scope="col">Deskripsi</th>
                      <th scope="col">Foto</th>
                      <th scope="col">Location</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listSesama}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
    }
}

const mapStateToProps = (state) => ({
    sesama : state.sesama
})

const mapDispatchToProps = (dispatch) => ({
    loadSesama : () => (dispatch(loadSesama()))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (DataSesama)
