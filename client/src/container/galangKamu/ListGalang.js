import { connect } from "react-redux";
import ListGalang from "../../components/galangKamu/ListGalang";
import { loadDetailGL, deleteReject, loadGlKamu } from "../../action";


const mapDispatchToProps = dispatch => ({
    dataLoad: (idUsing, type) => {
        dispatch(loadDetailGL(idUsing, type))
    },
    deleteReject: (_id, type) => {
        dispatch(deleteReject(_id, type))
    },
    showDetail: idUser => {
        dispatch(loadGlKamu(idUser))
    },
})

export default connect(
    null,
    mapDispatchToProps
)(ListGalang)