import { connect } from "react-redux";
import { loadGlKamu } from "../../../action/index";
import galangKamuProfile from "../../../components/HomeUser/DetailGLProfile/galangKamuProfile";


const mapStateToProps = (state) => ({
    galangKamu: state.store
})

const mapDispatchToProps = (dispatch) => ({
    loadGlKamu: (idUser) => dispatch(loadGlKamu(idUser))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(galangKamuProfile)