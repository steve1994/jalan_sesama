import {combineReducers} from 'redux';
import verification from './verification';
import anggaran from './anggaran';
import panti from './panti';

export default combineReducers({
    verification,
    anggaran,
    panti
})
