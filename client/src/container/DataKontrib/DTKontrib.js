import { connect } from "react-redux";
import DTKontrib from "../../components/DataKontrib/DTKontrib";
import { loadDetailGL } from "../../action/index";
import { loadGlKamu } from "../../action/index";




const mapStateToProps = (state) => ({
    detailKontrib: state.store,
})


const mapDispatchToProps = (dispatch) => ({
    dataLoad: (idUsing, type) => dispatch(loadDetailGL(idUsing, type)),
    showDetail: idUser => {
        dispatch(loadGlKamu(idUser))
    },
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DTKontrib)