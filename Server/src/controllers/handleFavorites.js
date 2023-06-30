let myFavorites = [] //es necesario let porque si fuera const no me dejaria modificar el array vacio

function postFav(req, res) {
    const character = req.body;

    myFavorites.push(character);
    return res.status(200).json(myFavorites);

}

function deleteFav(req, res) {
    const { id } = req.params;

    console.log(id)

    const filtered = myFavorites.filter(
        (character) => character.id !== Number(id)
        ); //uno le puede poner +id tambien para parsearlo

    myFavorites = filtered; //modificando el array vacio pisandolo

    return res.status(200).json(filtered);
}

module.exports = {
    postFav,
    deleteFav,
};