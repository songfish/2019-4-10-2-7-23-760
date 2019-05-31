module.exports = function main(inputs) {
    // write your code here...
    var startPrice = 6
    var perMinuteParkPrice = 0.25
    var {distance, parkTime} = inputs
    var price = startPrice + parkTime * perMinuteParkPrice
    if (distance >2 && distance <= 8){
        price += (distance - 2) * 0.8
    }
    if (distance > 8){
        price += (8 - 2) * 0.8 + (distance - 8) * 1.2
    }
    return Math.round(price);
};
