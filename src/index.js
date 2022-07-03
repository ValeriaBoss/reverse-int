module.exports = function reverse (num) {
 return  parseInt(String(num)
.split("")
.reverse()
.join(""));
    
}