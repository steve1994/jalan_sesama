import { connect } from "react-redux";
import beriDonasiBeranda from "../../../components/HomeUser/DetailGLBeranda/beriDonasiBeranda";
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
)(beriDonasiBeranda)