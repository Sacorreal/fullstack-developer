const { Router} = require('express'); 
const router = Router(); 
const {obtenerJugador} = require('../controller/jugadores')

router.get('/', obtenerJugador)

module.exports = router