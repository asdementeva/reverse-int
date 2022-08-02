module.exports = function reverse (n) {
    
    if (n > 0){
        let a = String(n).split('').reverse().join('');
        return +a;
        } else {
    
         a = String(n).split('').slice(1).reverse().join('');
        return +a;
        }
    
}
