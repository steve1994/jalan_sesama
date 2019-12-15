import { connect } from "react-redux";
import DetailGLProfile from "../../../components/HomeUser/DetailGLProfile/DetailGLProfile";
import { loadDetailDonasi } from "../../../action/index";




const mapStateToProps = (state) => ({
    responseDetail: state.DetailGalang
})

const mapDispatchToProps = (dispatch) => ({  
    showDetail: (_id,type) => dispatch(loadDetailDonasi(_id,type))    
})


export default connect(
    mapStateToProps,
    mapDispatchToProps

)(DetailGLProfile)