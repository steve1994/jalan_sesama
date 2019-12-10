import { connect } from "react-redux";
import { loadAllDonations } from "../../action/index";
import ProfileUser from "../../components/ProfileUser";
import { loadDetailDonasi } from "../../action/index";


const mapStateToProps = (state) => ({
  resProfileSuccess: state.users
})

// const mapDispatchToProps = (dispatch) => ({
//   loadProfile: () => dispatch(loadProfile()),
  
// })
  
  export default connect(
    mapStateToProps,
    null,
  )(ProfileUser)