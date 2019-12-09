import { connect } from "react-redux";
import beriDonasiPanti from "../../../components/HomeUser/DetailGLUmum/beriDonasiPanti";
import { putNominalDonasi, loadDataPenggalang, loadDetailGL } from "../../../action/index";





const mapStateToProps = (state) => ({
    responseDetail: state.DetailGalang,
    detailKontrib: state.store
})

const mapDispatchToProps = (dispatch) => ({
    dataLoad: (idUsing, type) => dispatch(loadDetailGL(idUsing, type)),
    putNominal: (idGalangDana, nominal) => dispatch(putNominalDonasi(idGalangDana, nominal)),
    loadDataPenggalang: (idUsing, type) => dispatch(loadDataPenggalang(idUsing, type)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(beriDonasiPanti)