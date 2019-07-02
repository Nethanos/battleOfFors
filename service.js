const axios = require('axios')

const URL = 'https://swapi.co/api/'


function getCharacter(charName){
    axios.get(`${URL}people`)
}

function getAllCharacters(){
    return axios.get(`${URL}people`);
}


module.exports = {
    getAllCharacters
}