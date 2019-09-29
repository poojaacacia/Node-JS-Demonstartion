const sayName = () => {
    console.log("hello acacia");
}

const sayAddress = () => {
    console.log('some street');
}

module.exports.sayName =sayName; 
module.exports.sayAddress=sayAddress;