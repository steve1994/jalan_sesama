import { connect } from "react-redux";
import ListItemPanti from "../../../components/HomeUser/DataPanti/ListItemPanti";
import { loadDetailGL } from "../../../action/index";


const mapDispatchToProps = dispatch => ({
    loadData: (idUsing, type) => {
        dispatch(loadDetailGL(idUsing, type))
    }
})

export default connect (
    null,
    mapDispatchToProps
)(ListItemPanti)