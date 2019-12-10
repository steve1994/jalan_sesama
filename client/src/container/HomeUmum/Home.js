import { connect } from "react-redux";
import { loadAllDonations } from "../../action/index";
import Home from "../../components/HomeUser/Home";
import { loadDetailDonasi } from "../../action/index";
import { postProfile } from "../../action/users"


const mapStateToProps = (state) => ({
  loadAllDataDonations: state.Donations,
  responseLogin: state.LoginReg
})

const mapDispatchToProps = (dispatch) => ({
  loadAllDonations: () => dispatch(loadAllDonations()),
  showDetail: (_id,type) => dispatch(loadDetailDonasi(_id,type)),
  postProfile: (iduser) => dispatch(postProfile(iduser))
})
  
  export default connect(
    mapStateToProps, 
    mapDispatchToProps
  )(Home)