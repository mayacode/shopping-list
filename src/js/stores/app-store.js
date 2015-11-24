import { dispatch, register } from '../dispatchers/app-dispatcher';
import AppConstants from '../constants/app-constants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

var _globalList = [];

for (let i = 0; i < 10; i++) {
    _globalList.push({
        'id': i,
        'name': 'thing #' + i,
        'price': i + 1
    })
}

var _currentList = [];

const _removeItem = (item) => {
    _currentList.splice(_currentList.findIndex( i => i === item), 1);
};

const _findItem = (item) => {
    return _currentList.find(shopItem => shopItem.id === item.id);
};

const _increaseItem = (item) => item.qty++;

const _decreaseItem = (item) => {
    item.qty--;
    if (item.qty === 0) {
        _removeItem(item);
    }
};

const _addItem = (item) => {
    const shopItem = _findItem(item);
    if (!shopItem) {
        _currentList.push(Object.assign({qty: 1}, item));
    } else {
        _increaseItem(shopItem);
    }
};

const _listTotals = (qty = 0, total = 0) => {
    _currentList.forEach(shopItem => {
        qty += shopItem.qty;
        total += shopItem.qty * shopItem.price;
    });
};

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
        return _currentList;
    },
    getGlobalList(){
        return _globalList.map(item => {
            return Object.assign(
                {},
                item,
                _currentList.find(cItem => cItem.id === item.id));
        });
    },
    getListTotals(){
        return _listTotals();
    },
    dispatcherIndex: register(function(action){
        switch(action.actionType) {
            case AppConstants.ADD_ITEM:
                _addItem(action.item);
                break;
            case AppConstants.REMOVE_ITEM:
                _removeItem(action.item);
                break;
            case AppConstants.INCREASE_ITEM:
                _increaseItem(action.item);
                break;
            case AppConstants.DECREASE_ITEM:
                _decreaseItem(action.item);
                break;
            default:
                return true;
        }
        AppStore.emitChange();
        return true;
    })
});

export default AppStore;
