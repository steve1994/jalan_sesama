import { connect } from "react-redux";
import ListPanti from "../../../components/HomeUser/DataPanti/ListPanti";
import { loadAllPanti } from "../../../action";


const mapStateToProps = (state) => ({
  responseAllPanti: state.store
})

const mapDispatchToProps = (dispatch) => ({

  loadAllPanti: () => dispatch(loadAllPanti()),
  
})
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ListPanti)