function orders(product, quantity){

    let price = 0;
    let totalPrice = 0;

    if (product === 'coffee'){
        price = 1.5;
    }else if(product === 'water'){
        price = 1.00;
    }else if(product === 'coke'){
        price = 1.40;
    }else {
        price = 2.00;
    }
    totalPrice = quantity * price;
    console.log((totalPrice).toFixed(2));
}

orders('water', 5)