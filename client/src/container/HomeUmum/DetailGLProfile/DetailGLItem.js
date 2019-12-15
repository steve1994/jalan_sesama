import { connect } from "react-redux";
import DetailGLItem from "../../../components/HomeUser/DetailGLProfile/DetailGLItem";
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

)(DetailGLItem);