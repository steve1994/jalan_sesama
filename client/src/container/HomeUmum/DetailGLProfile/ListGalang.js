import { connect } from "react-redux";
import ListGalang from "../../../components/HomeUser/DetailGLProfile/ListGalang";
import { loadDetailGL } from "../../../action/index";


const mapDispatchToProps = dispatch => ({
    dataLoad: (idUsing, type) => {
        dispatch(loadDetailGL(idUsing, type))
    }
})

export default connect (
    null,
    mapDispatchToProps
)(ListGalang)