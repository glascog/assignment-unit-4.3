console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item){
    basket.push(item);
    if(basket.length > 0){
        return true;
    }
}
// add item to basket
console.log('Add blueberries (should be true):', addItem('blueberries'));
// check item in basket
console.log('Basket is:', basket);
// add item to basket
console.log('Add yogurt (should be true):', addItem('yogurt'));
// check items in basket
console.log('Basket is now:', basket);
// add item to basket
console.log('Add granola (should be true):', addItem('granola'));
// check items in basket
console.log('Basket is now:', basket);
// end addItem


function listItems(item, basket){
   // list items in basket array 
    for (let i=0; i<basket.length; i++);
    // initialize at item 0 and iterate through array
        console.log('Show item in basket:', item[i]);
        if()
    }








// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
