import { connect } from "react-redux";
import FormRegis from "../../components/LoginReg/FormRegis";
import { postRegister } from '../../action/users';

const mapDispatchToProps = (dispatch) => ({
    postRegister: (nama, alamat, username, password, filename) => dispatch(postRegister(nama, alamat, username, password, filename))
})

export default connect(
    null,
    mapDispatchToProps
)(FormRegis)