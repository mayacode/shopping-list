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
    getRef(endpoint, stateElementName, context){
        return ListAPI.getRef(endpoint, stateElementName, context);
    },
    DBbindToState(endpoint, stateElementName, context){
        return ListAPI.DBbindToState(endpoint, stateElementName, context);
    },
    removeRefBinding(ref){
        ListAPI.removeRefBinding(ref);
    },
    findItem(item, itemsList) {
        ListAPI.findItem(item, itemsList);
    },
    dispatcherIndex: register(function(action){
        switch(action.actionType) {
            case Constants.ADD_ITEM:
                ListAPI.addItem(action.item);
                break;
            case Constants.INCREASE_ITEM:
                ListAPI.increaseItem(action.item);
                break;
            case Constants.DECREASE_ITEM:
                ListAPI.decreaseItem(action.item);
                break;
            case Constants.ADD_NEW_ITEM:
                ListAPI.addNewItem(action.item);
                break;
            default:
                return true;
        }
        AppStore.emitChange();
        return true;
    })
});

export default AppStore;
