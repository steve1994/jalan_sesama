import { connect } from "react-redux";
import About from "../../../../components/HomeUser/DetailGLProfile/KontribProfile/About";
// import { loadDetailGL } from "../../action";


// const mapDispatchToProps = dispatch => ({
//     dataLoad: (idUsing, type) => {
//         dispatch(loadDetailGL(idUsing, type))
//     }
// })

export default connect (
    null,
    // mapDispatchToProps
)(About)