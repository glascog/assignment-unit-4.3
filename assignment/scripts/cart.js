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


function listItems(){
//    list items in basket array 
let i=0;
// the index of the array items should start at 0
    while (i<basket.length) {
        console.log(basket[i]);
        i++;
        // iterate through the items in the array basket
    }
}
console.log(listItems());
//    coming up as undefined - what am i missing?

  console.log(basket);
  // check array contents
  // ['blueberries', 'yogurt', 'granola']

function empty(){
    while(basket.length>0){
        basket = [];    
        return basket;
    }
}
console.log('check basket:', empty());







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
