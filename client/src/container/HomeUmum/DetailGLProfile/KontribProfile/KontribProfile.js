import { connect } from "react-redux";
import KontribProfile from "../../../../components/HomeUser/DetailGLProfile/KontribProfile/KontribProfile";
import { loadDetailGL, loadGlKamu, loadAllPanti } from "../../../../action/index";




const mapStateToProps = (state) => ({
    detailKontrib: state.store,
})


const mapDispatchToProps = (dispatch) => ({
    dataLoad: (idUsing, type) => dispatch(loadDetailGL(idUsing, type)),
    showDetail: idUser => {
        dispatch(loadGlKamu(idUser))
    },
    loadAllPanti: () => dispatch(loadAllPanti())
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(KontribProfile)