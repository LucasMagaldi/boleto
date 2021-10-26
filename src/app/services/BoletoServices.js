
class BoletoServices {
    async validation(linhaDigitavel) {
        try{
            const onlyNumbers = await this.isNumber(linhaDigitavel);
            if (!onlyNumbers) {
                return false
            }

            const barCode = `${linhaDigitavel.substr(0,4) + linhaDigitavel.substr(32,15) + linhaDigitavel.substr(4,5) + linhaDigitavel.substr(10,10) + linhaDigitavel.substr(21,10)}`
            const dias = linhaDigitavel.substr(33,4);
            console.log(`Dias: ${dias}`);
            const valorBoletoCompleto = linhaDigitavel.substr(37);
           // console.log(valorBoletoCompleto.substr(6));
            const Amount = valorBoletoCompleto.substr(6);
            return { barCode, Amount }
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