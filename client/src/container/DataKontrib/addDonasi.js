import { connect } from "react-redux";
import AddDonasi from "../../components/DataKontrib/addDonasi";
import { loadDetailGL } from "../../action/index";
import { postPenggalangan } from "../../action/index";



const mapStateToProps = (state) => ({
    detailKontrib: state.store
})


const mapDispatchToProps = (dispatch) => ({
    loadDetailGL: (idUsing, type) => dispatch(loadDetailGL(idUsing, type)),
    postPenggalangan: (judul,deskripsi, fotoGalang, using) => dispatch(postPenggalangan(judul,deskripsi, fotoGalang, using))
     
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddDonasi)