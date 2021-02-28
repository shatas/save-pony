import axios from "axios";

export const makeNextMove = (direction) => {

    let move = null;
    return axios.post('/api/next', {"direction": direction})
        .then((response) => {
            move = (response.data);
            return move
        })
        .catch((error) => {
            // handle error
            console.log(error);
        })
}

export default makeNextMove;
