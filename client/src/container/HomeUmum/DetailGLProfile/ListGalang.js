import { connect } from "react-redux";
import ListGalang from "../../../components/HomeUser/DetailGLProfile/ListGalang";
import { loadDetailGL, deleteReject, loadGlKamu } from "../../../action/index";


const mapDispatchToProps = dispatch => ({
    dataLoad: (idUsing, type) => {
        dispatch(loadDetailGL(idUsing, type))
    },
    deleteReject: (_id , type ) => {
        dispatch(deleteReject(_id , type))
    },
    showDetail: idUser => {
        dispatch(loadGlKamu(idUser))
    },
})

export default connect (
    null,
    mapDispatchToProps
)(ListGalang)