import axios from "axios";

export const getCurrentState = () => {

    let maze = null;
    return axios.get('/api/data')
        .then((response) => {
            maze = (response.data);
            return maze
        })
        .catch((error) => {
            // handle error
            console.log(error);
        })
};

export default getCurrentState;
