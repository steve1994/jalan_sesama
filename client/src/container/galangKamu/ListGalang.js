import { connect } from "react-redux";
import ListGalang from "../../components/galangKamu/ListGalang";
import { loadDetailGL } from "../../action";


const mapDispatchToProps = dispatch => ({
    dataLoad: (idUsing, type) => {
        dispatch(loadDetailGL(idUsing, type))
    }
})

export default connect (
    null,
    mapDispatchToProps
)(ListGalang)