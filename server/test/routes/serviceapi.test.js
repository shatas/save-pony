const request = require("supertest")("https://ponychallenge.trustpilot.com/pony-challenge");
const expect = require("chai").expect;

describe("POST create maze", function () {
    it("create maze test & check if maze_id presented", async function () {
            const response = await request.post("/maze").send({
                "maze-width": 15,
                "maze-height": 15,
                "maze-player-name": "Spike",
                "difficulty": 1
            });

        expect(response.status).to.eql(200);
        expect(response.body).to.include.keys("maze_id");
    });
});
