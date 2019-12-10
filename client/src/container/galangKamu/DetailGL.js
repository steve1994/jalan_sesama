import { connect } from "react-redux";
import { loadDetailDonasi } from "../../action/index";
import DetailGL from "../../components/DetailGL";



const mapStateToProps = (state) => ({
    responseDetail: state.DetailGalang
})

const mapDispatchToProps = (dispatch) => ({
    loadDetailDonasi: (idData, type) => dispatch(loadDetailDonasi(idData,type))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailGL)