import { dispatch, register } from '../dispatchers/app-dispatcher';
import Constants from '../constants/constants';
import { EventEmitter } from 'events';
import ListAPI from '../api/ListAPI';

const CHANGE_EVENT = 'change';

const AppStore = Object.assign(EventEmitter.prototype, {
    emitChange(){
        this.emit(CHANGE_EVENT);
    },
    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener(callback){
        this.removeListener(CHANGE_EVENT, callback);
    },
    getCurrentList(){
        return ListAPI.currentList;
    },
    getGlobalList(){
        return ListAPI.getGlobalList();
    },
    getListTotals(){
        return ListAPI.listTotals();
    },
    dispatcherIndex: register(function(action){
        switch(action.actionType) {
            case Constants.ADD_ITEM:
                ListAPI.addItem(action.item);
                break;
            case Constants.REMOVE_ITEM:
                ListAPI.removeItem(action.item);
                break;
            case Constants.INCREASE_ITEM:
                ListAPI.increaseItem(action.item);
                break;
            case Constants.DECREASE_ITEM:
                ListAPI.decreaseItem(action.item);
                break;
            default:
                return true;
        }
        AppStore.emitChange();
        return true;
    })
});

export default AppStore;
