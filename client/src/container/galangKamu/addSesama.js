import { connect } from "react-redux";
import { postSesama } from "../../action/index";
import addSesama from "../../components/addSesama";

const mapDispatchToProps = (dispatch) => ({
    postSesama: (judul, nama, alamat, deskripsi,location, fotoSesama) => dispatch(postSesama(judul, nama, alamat, deskripsi,location, fotoSesama))
  })
  
  export default connect(
    null,
    mapDispatchToProps
  )(addSesama)