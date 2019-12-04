import { connect } from "react-redux";
import Donations from "../../components/DataKontrib/Donations";
import { loadDataPenggalang } from "../../action/index";



const mapStateToProps = (state) => ({
    detailKontrib: state.store,
    DataDonasi: state.Donations
})


const mapDispatchToProps = (dispatch) => ({
    loadDataPenggalang: (dataPenggalangan) => dispatch(loadDataPenggalang(dataPenggalangan)),
    
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Donations)