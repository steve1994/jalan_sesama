import {combineReducers} from 'redux';
import verification from './verification';
import anggaran from './anggaran';
import panti from './panti';
import sesama from './sesama';

export default combineReducers({
    verification,
    anggaran,
    panti,
    sesama
})
