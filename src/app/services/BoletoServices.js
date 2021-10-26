
class BoletoServices {
    async validation(linhaDigitavel) {
        try{
            const onlyNumbers = await this.isNumber(linhaDigitavel);
            if (!onlyNumbers) {
                return false
            }

            const codebar = `${linhaDigitavel.substr(0,4) + linhaDigitavel.substr(32,15) + linhaDigitavel.substr(4,5) + linhaDigitavel.substr(10,10) + linhaDigitavel.substr(21,10)}`
            return codebar
        }
        catch(erro){
            console.log(erro);
            return false
        }
    }

    async isNumber(number){
        try{
            return ! isNaN(parseInt(number)) && isFinite(number);
        }
        catch(erro){
            console.log(erro);
            return false
        }
    }
}

module.exports = new BoletoServices();