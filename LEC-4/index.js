// function buyProduct(product_Name, cb) {
//     //do some asynchronous operation
//     setTimeout(() => {
//         //all the operations completed
//         console.log("all the i/o operations are completed and order details are written in user data")
//         cb();
//     }, 0)
// }

// buyProduct("Iphone 16", function() {
//     console.log("product is purchased")
// })
let product=[{
    name:"samsung",
    amount:70000,
    quantity: 10
},
{
    name:"Iphone 16",
    amount:100000,
    quantity: 0
}
]
function buyProduct(product_Name, cb) {
    //do some asynchronous operation
    let isProduct = product.filter((p) => p.name==product_Name)[0];
    if (!isProduct) {
        return cb("product is not available", null)
    }
    cb(null, isProduct.amount);
}

// made the above function using promise in promise.js file

buyProduct("Iphone 16", function() {
    console.log("product is purchased")
})

let availableAmount = 200000
function deductbankamount(amount, cb) {
    //do some transactions
    if (amount > availableAmount) {
        return cb("bank balance is low", null)
    } else {
        availableAmount -= amount;
        cb(null, "amount deducted");
        //cb(null, "amount deducted");
    }
}

buyProduct("motorolla", function(err, amount) {
    if (err) return console.log(err);
    console.log(amount);
    deductbankamount(amount, function(err, message) {
        if (err) return console.log(err)
            console.log(message);
    })
})

const fs = require("fs");
fs.readFile("filepath", "utf-8", (err, data) => {
})