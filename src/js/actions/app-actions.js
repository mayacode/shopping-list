import AppConstants from '../constants/app-constants';
import { dispatch, register } from '../dispatchers/app-dispatcher';

export default {
    globalList: {
        addItem(item){
            dispatch({
                    actionType: AppConstants.ADD_ITEM,
                    item: item
                });
        },
        removeItem(item){
            dispatch({
                    actionType: AppConstants.REMOVE_ITEM,
                    item: item
                });
        }
    },
    currentList: {
        addItem(item){
            console.log('AppActions addItem', item);
            dispatch({
                actionType: AppConstants.ADD_ITEM,
                item: item
            });
        },
        removeItem(item){
            console.log('AppActions removeItem', item);
            dispatch({
                actionType: AppConstants.REMOVE_ITEM,
                item: item
            });
        },
        increaseItem(item){
            dispatch({
                actionType: AppConstants.INCREASE_ITEM,
                item: item
            });
        },
        decreaseItem(item){
            dispatch({
                actionType: AppConstants.DECREASE_ITEM,
                item: item
            });
        }
    }
}