import { connect } from "react-redux";
import { postSesama } from "../../action/index";
import addSesama from "../../components/addSesama";

const mapStateToProps = (state) => ({
  responseLogin: state.LoginReg
})

const mapDispatchToProps = (dispatch) => ({
  postSesama: (judul, nama, alamat, deskripsi, location, fotoSesama) => dispatch(postSesama(judul, nama, alamat, deskripsi, location, fotoSesama))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(addSesama)