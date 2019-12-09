import { connect } from "react-redux";
import { loadAllDonations } from "../../action/index";
import Home from "../../components/HomeUser/Home";
import { loadDetailDonasi } from "../../action/index";


const mapStateToProps = (state) => ({
  loadAllDataDonations: state.Donations
})

const mapDispatchToProps = (dispatch) => ({
  loadAllDonations: () => dispatch(loadAllDonations()),
  showDetail: (_id,type) => dispatch(loadDetailDonasi(_id,type))
})
  
  export default connect(
    mapStateToProps, 
    mapDispatchToProps
  )(Home)