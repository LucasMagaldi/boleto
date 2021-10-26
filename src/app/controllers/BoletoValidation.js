
class BoletoValidation{
    async Validation(req,res){
        const linha = req.params.params;
        console.log(linha)

        return res.send(`boleto ${linha}`);
    }
}

module.exports = new BoletoValidation();