const { Router } = require('express')
const getCharById = require('../controllers/getCharById')
const { login } = require('../controllers/login')
const { postFav, deleteFav } = require('../controllers/handleFavorites')

const router = Router()

router.get('/character/:id', getCharById);

router.get('/login', (req, res) => {
    login(req, res);
});

router.post('/fav', postFav); //las dos formas son validad, dejo dos de la forma
//larga para entender por donde pasa (por req y res).

router.delete('/fav/:id', deleteFav);

module.exports = router;