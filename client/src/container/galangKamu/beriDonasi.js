import { connect } from "react-redux";
import { putNominalDonasi } from "../../action/index";
import beriDonasi from "../../components/beriDonasi";
import { loadDataPenggalang } from "../../action/index";




const mapStateToProps = (state) => ({
    responseDetail: state.DetailGalang,
    detailKontrib: state.store
})

const mapDispatchToProps = (dispatch) => ({
    putNominal: (idGalangDana, nominal) => dispatch(putNominalDonasi(idGalangDana, nominal)),
    loadDataPenggalang: (dataPenggalangan) => dispatch(loadDataPenggalang(dataPenggalangan)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(beriDonasi)