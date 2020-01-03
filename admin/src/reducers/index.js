import {combineReducers} from 'redux';
import verification from './verification';
import anggaran from './anggaran';
import panti from './panti';
import sesama from './sesama';
import notification from './notification';
import user from './user';
import chat from './chat'

export default combineReducers({
    verification,
    anggaran,
    panti,
    sesama,
    notification,
    user,
    chat
})
