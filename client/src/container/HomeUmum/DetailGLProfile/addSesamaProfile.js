import { connect } from "react-redux";
import { postSesama } from "../../../action/index";
import addSesamaProfile from "../../../components/HomeUser/DetailGLProfile/addSesamaProfile";

const mapStateToProps = (state) => ({
  responseLogin: state.LoginReg
})
const mapDispatchToProps = (dispatch) => ({
    postSesama: (idUser, judul, nama, alamat, deskripsi,location, fotoSesama) => dispatch(postSesama(idUser, judul, nama, alamat, deskripsi,location, fotoSesama))
  })
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(addSesamaProfile)