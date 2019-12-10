import { connect } from "react-redux";
// import { loadAllDonations } from "../../action/index";
import UserItem from "../../components/UserItem";
import { processLogout } from "../../action/users";
import { loadGlKamu } from "../../action/index";


// const mapStateToProps = (state) => ({
//   resProfileSuccess: state.users
// })

const mapDispatchToProps = (dispatch) => ({
  processLogout: () => dispatch(processLogout()),
  showDetail: idUser => {
    dispatch(loadGlKamu(idUser))
  },
  
})
  
  export default connect(
    // mapStateToProps,
    null,
    mapDispatchToProps,
  )(UserItem)