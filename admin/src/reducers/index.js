import {combineReducers} from 'redux';
import verification from './verification';
import anggaran from './anggaran';

export default combineReducers({
    verification,
    anggaran
})
