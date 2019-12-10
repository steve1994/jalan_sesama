import { connect } from "react-redux";
import FormLogin from "../../components/LoginReg/FormLogin";
import { loginProcess } from '../../action/users';

const mapDispatchToProps = (dispatch) => ({
    loginProcess: ( username, password) => dispatch(loginProcess(username, password))
})

export default connect(
    null,
    mapDispatchToProps
)(FormLogin)