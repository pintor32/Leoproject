const dividir = function (num1, num2){
    if (num2 != 0 && num1 != 0){
       return num1 / num2; 
    }
    return "No se puede dividir entre 0" 
}
module.exports = dividir;