import { connect } from "react-redux";
import FormRegis from "../../components/LoginReg/FormRegis"

const mapDispatchToProps = dispatch => ({
    addUser: Items => dispatch(addUser(items))
})

export default connect(
    null,
    mapDispatchToProps
)(FormRegis)