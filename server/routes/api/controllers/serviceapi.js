const axios = require('axios');

const serviceapi = (config) => ({


    getMazeId: async (req, res) => {

        let mazePrint = [];

        const url = `${config.services.api}`;
        await axios.post(url, {
            "maze-width": config.maze.mazeWidth,
            "maze-height": config.maze.mazeHeight,
            "maze-player-name": `${config.maze.ponyName}`,
            "difficulty": config.maze.difficulty
        }).then((response) => {
            const resp = (response.data);
            mazeId = resp.maze_id;
            console.log(mazeId)
        }).catch((err) => {
            console.error('[SERVER][CREATE MAZE]', err);
            res.status(500).json({});
        });

        if (!mazeId) return null;
        try {
            const url = (`${config.services.api}/${mazeId}/print`);
            const response = await axios.get(url);
            mazePrint = response.data;
        } catch (error) {
            console.error('[SERVER][PRINT MAZE]', err);
            res.status(500).json({});
        }
        res.json(mazePrint);
    },

    sendDirection: async (req, res) => {

        try {
            const url = `${config.services.api}/${mazeId}`;

            let body = {
                "direction": req.body.direction
            };

            const response = await axios.post(url, body);
            res.json(response.data);

            let {state, "state-result": stateResult} = response.data;
            result = stateResult;
            status = state;

        } catch (err) {
            console.error('[SERVER][SEND DIRECTION]', err);
            res.status(500).json({});
        }
    },

    getMazeCurrentState: async (req, res) => {

        if (!mazeId) return null;
        try {
            const url = (`${config.services.api}/${mazeId}/print`);
            const response = await axios.get(url);
            mazePrint = response.data;
        } catch (err) {
            console.error('[SERVER][GET CURRENT STATE]', err);
            res.status(500).json({});
        }
        res.json(mazePrint);
}
});


module.exports = serviceapi;
