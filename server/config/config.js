module.exports = () => ({
    services: {
        api: process.env.API_URL || 'https://ponychallenge.trustpilot.com/pony-challenge/maze'
    },
    maze: {
        ponyName: 'Spike',
        mazeWidth: 15,
        mazeHeight: 15,
        difficulty: 1
    }
});
