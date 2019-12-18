import { connect } from "react-redux";
import ItemDonations from "../../components/DataKontrib/ItemDonations";
import { loadDataPenggalang } from "../../action/index";
import { loadDetailDonasi } from "../../action/index";




const mapStateToProps = (state) => ({
    detailKontrib: state.store,
    DataDonasi: state.Donations
})


const mapDispatchToProps = (dispatch) => ({
    loadDataPenggalang: (dataPenggalangan) => dispatch(loadDataPenggalang(dataPenggalangan)),
    
    showDetail: (_id,type) => dispatch(loadDetailDonasi(_id,type))    
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemDonations)