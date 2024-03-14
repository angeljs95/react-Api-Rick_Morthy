import { Api_RM } from "../constants/Api.constants";

class RickAndMortyService {

    async getAllCharacters() {
const response = await fetch(Api_RM.CHARACTERS());
//intercepta cualquier solicitud y la devuelve
return response.json();

    }

    async getCharactersByID(id){
        const response = await fetch(Api_RM.CHARACTERS_BY_ID(id));
        // intercepta la solicitud con el id del personaje y lo devuelve
        return response.json();
    }


}

export default new RickAndMortyService();