import Rebase from 're-base';
var base = Rebase.createClass('link-to-your-free-firebase.com-db');

const ListAPI = {
    globalList: [],
    currentList: [],
    getDB(){
        return base;
    },
    getRef(endpoint, stateElementName, context){
        console.log('getRef', endpoint, stateElementName);
        return base.syncState(endpoint, {
            context: context,
            state: stateElementName,
            asArray: true,
            then(){
                context.setState({loading: false})
            }
        });
    },
    removeRefBinding(ref){
        base.removeBinding(ref);
    },
    removeItem(item) {
        this.currentList.splice(this.currentList.findIndex( i => i === item), 1);
    },
    findItem(item) {
        return this.currentList.find(shopItem => shopItem.id === item.id);
    },
    increaseItem(item) {
        item.qty++;
    },
    decreaseItem(item) {
        item.qty--;
        if (item.qty === 0) {
            this.removeItem(item);
        }
    },
    addItem(item) {
        const shopItem = this.findItem(item);
        if (!shopItem) {
            this.currentList.push(Object.assign({qty: 1}, item));
        } else {
            this.increaseItem(shopItem);
        }
    },
    listTotals(qty = 0, total = 0) {
        this.currentList.forEach(shopItem => {
            qty += shopItem.qty;
            total += shopItem.qty * shopItem.price;
        });
        return {qty, total: total.toFixed(2)};
    },
    addNewItem(item){
        this.currentList.push(Object.assign({qty: 1}, item));
    }
};

export default ListAPI;
