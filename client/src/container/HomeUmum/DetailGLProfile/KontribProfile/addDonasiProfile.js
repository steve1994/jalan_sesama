import { connect } from "react-redux";
import AddDonasiProfile from "../../../../components/HomeUser/DetailGLProfile/KontribProfile/addDonasiProfile";
import { loadDetailGL, postPenggalangan, loadDataPenggalang } from "../../../../action/index";



const mapStateToProps = (state) => ({
    detailKontrib: state.store
})


const mapDispatchToProps = (dispatch) => ({
    dataLoad: (idUsing, type) => dispatch(loadDetailGL(idUsing, type)),
    postPenggalangan: (idUsing, nama, alamat, type, judul,deskripsi, nominalSet, fotoGalang) => dispatch(postPenggalangan(idUsing, nama, alamat, type, judul, deskripsi, nominalSet, fotoGalang)),
    loadDataPenggalang: (dataPenggalangan) => dispatch(loadDataPenggalang(dataPenggalangan)),
     
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddDonasiProfile)