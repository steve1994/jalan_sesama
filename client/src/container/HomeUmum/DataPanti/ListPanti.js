import { connect } from "react-redux";
import ListPanti from "../../../components/HomeUser/DataPanti/ListPanti";
import { loadAllPanti, loadAllDonations } from "../../../action";


const mapStateToProps = (state) => ({
  responseAllPanti: state.store
})

const mapDispatchToProps = (dispatch) => ({

  loadAllPanti: () => dispatch(loadAllPanti()),
  loadAllDonations: () => dispatch(loadAllDonations()),
  
})
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ListPanti)