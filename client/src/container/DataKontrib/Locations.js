import { connect } from "react-redux";
import Locations from "../../components/DataKontrib/Locations";
// import { loadDetailGL } from "../../action";


// const mapDispatchToProps = dispatch => ({
//     dataLoad: (idUsing, type) => {
//         dispatch(loadDetailGL(idUsing, type))
//     }
// })

export default connect (
    null,
    // mapDispatchToProps
)(Locations)