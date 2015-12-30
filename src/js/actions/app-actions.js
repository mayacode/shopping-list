import Constants from '../constants/constants';
import { dispatch, register } from '../dispatchers/app-dispatcher';

export default {
    globalList: {
        addItem(item){
            dispatch({
                    actionType: Constants.ADD_ITEM,
                    item: item
                });
        },
        removeItem(item){
            dispatch({
                    actionType: Constants.REMOVE_ITEM,
                    item: item
                });
        }
    },
    currentList: {
        addItem(item){
            dispatch({
                actionType: Constants.ADD_ITEM,
                item: item
            });
        },
        removeItem(item){
            dispatch({
                actionType: Constants.REMOVE_ITEM,
                item: item
            });
        },
        increaseItem(item){
            dispatch({
                actionType: Constants.INCREASE_ITEM,
                item: item
            });
        },
        decreaseItem(item){
            dispatch({
                actionType: Constants.DECREASE_ITEM,
                item: item
            });
        }
    }
}
