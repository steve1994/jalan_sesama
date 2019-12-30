import { connect } from 'react-redux';
import ChatMessage from '../../components/Message/ChatMessage';
import { postChats, deleteChat } from '../../action/index';

const mapStateToProps = (state) => ({
    resProfileSuccess: state.users
})

const mapDispatchToProps = (dispatch) => ({
    postChats: (idUser, userName, message) => dispatch(postChats(idUser, userName, message)),
    deleteChat: (idUser) => dispatch(deleteChat(idUser))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ChatMessage);