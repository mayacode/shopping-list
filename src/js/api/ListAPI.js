import Rebase from 're-base';
var base = Rebase.createClass('link-to-your-free-firebase.com-db');

const ListAPI = {
    globalList: [],
    currentList: [],
    getRef(endpoint, stateElementName, context){
        return base.syncState(endpoint, {
            context: context,
            state: stateElementName,
            asArray: true,
            then(){
                context.setState({loading: true})
            }
        });
    },
    removeRefBinding(ref){
        base.removeBinding(ref);
    },
    DBbindToState(endpoint, stateElementName, context){
        return base.bindToState(endpoint, {
            context: context,
            state: stateElementName,
            asArray: true
        });
    },
    findItem(item, itemsList) {
        return itemsList.find(shopItem => shopItem.id === item.id);
    },
    removeItem(item, itemsList) {
        itemsList.splice(itemsList.findIndex( i => i === item), 1);
    },
    increaseOrAddItem(dataObj) {
        base.fetch(dataObj.endpoint, {
            context: this,
            asArray: true,
            then(data){
                if (data.length) {
                    console.log(data);
                } else {
                    base.push(dataObj.endpoint, {data: Object.assign({qty: 1}, dataObj.item)});
                }
            },
            queries: {
                orderByChild: 'name',
                startAt: dataObj.item.name,
                endAt: dataObj.item.name
            }
        });
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
    addItem(dataObj) {
        this.increaseOrAddItem(dataObj);
        //if (!shopItem) {
        //    //this.currentList.push(Object.assign({qty: 1}, item));
        //    base.push(dataObj.endpoint, dataObj.item);
        //} else {
        //    this.increaseItem(shopItem);
        //}
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
