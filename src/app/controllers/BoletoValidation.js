const BoletoServices = require("../services/BoletoServices");

class BoletoValidation{
    async Validation(req,res){
        const response = {
            status: 400,
            mensage: "Linha digitável precisa conter 47 ou 48 caracteres"
        }
        const linha = req.params.params;
        console.log(linha);
        if(linha.length < 47 || linha.length > 48   ){
            return res.send(response).json(response).status(400)
        }
        const boletoValidaNumber = await BoletoServices.validation(linha);
        console.log(boletoValidaNumber)
        return res.send(`boleto ${linha}`).status(200);
    }
}

module.exports = new BoletoValidation();