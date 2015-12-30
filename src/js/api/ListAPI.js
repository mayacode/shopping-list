const ListAPI = {
    globalList: [],
    currentList: [],
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
        return {qty, total};
    },
    getGlobalList(){
        return this.globalList.map(item => {
            return Object.assign(
                {},
                item,
                this.currentList.find(cItem => cItem.id === item.id));
        });
    },
    init() {
        for (let i = 0; i < 10; i++) {
            this.globalList.push({
                'id': i,
                'name': 'thing #' + i,
                'price': i + 1
            });
        }
    }
};

ListAPI.init();
export default ListAPI;