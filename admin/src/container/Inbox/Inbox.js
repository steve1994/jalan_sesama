import { connect } from 'react-redux';
import Inbox from '../../components/inbox/Inbox';
import { loadMessage } from '../../actions/index';

const mapStateToProps = (state) => ({
    loadChatSuccess: state.chat
})

const mapDispatchToProps = (dispatch) => ({
    loadMessage: () => dispatch(loadMessage())
})


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Inbox);