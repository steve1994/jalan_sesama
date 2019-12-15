import { connect } from "react-redux";
import beriDonasiProfile from "../../../components/HomeUser/DetailGLProfile/beriDonasiProfile";
import { putNominalDonasi, loadDetailGL, loadAllDonations } from "../../../action/index";





const mapStateToProps = (state) => ({
    responseDetail: state.DetailGalang,
    detailKontrib: state.store
})

const mapDispatchToProps = (dispatch) => ({
    dataLoad: (idUsing, type) => dispatch(loadDetailGL(idUsing, type)),
    putNominal: (idGalangDana, nominal) => dispatch(putNominalDonasi(idGalangDana, nominal)),
    loadAllDonations: () => dispatch(loadAllDonations()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(beriDonasiProfile)