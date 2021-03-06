import { connect } from "react-redux";
import DetailGL from "../../components/DetailGL";
import { loadDetailDonasi } from "../../action/index";




const mapStateToProps = (state) => ({
    responseDetail: state.DetailGalang
})

const mapDispatchToProps = (dispatch) => ({  
    showDetail: (_id,type) => dispatch(loadDetailDonasi(_id,type))    
})


export default connect(
    mapStateToProps,
    mapDispatchToProps

)(DetailGL)