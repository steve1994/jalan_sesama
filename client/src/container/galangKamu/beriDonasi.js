import { connect } from "react-redux";
import { putNominalDonasi } from "../../action/index";
import beriDonasi from "../../components/beriDonasi";
import { loadDataPenggalang } from "../../action/index";
import { loadDetailGL } from "../../action/index";





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
)(beriDonasi)