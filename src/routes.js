const router = require('express').Router();
const BoletoValidation = require('./app/controllers/BoletoValidation');

router.get('/boleto/:params', BoletoValidation.Validation)

module.exports = router;