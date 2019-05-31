module.exports = function main(inputs) {
    // write your code here...
    var startPrice = 6
    var perMinuteParkPrice = 0.25
    d = inputs.distance
    p = inputs.parkTime
    if (d <= 2){
        return Math.round(startPrice + p * perMinuteParkPrice)
    }  
    if (d > 2 && d <= 8){
        return Math.round(startPrice + (d - 2) * 0.8 + p * perMinuteParkPrice)
    }
    if (d > 8){
        return Math.round(startPrice + 6 * 0.8 + (d - 8) * 1.2 + p * perMinuteParkPrice)
    }
    return "price";
};
