const request = require("supertest")("https://reqres.in");
const expect = require("chai").expect;

describe("Post User reqres", function() {
    it("Success register - 200" , async function(){
        const response = await request
        .post("/api/users")
        .send({name : "nadira",
        job: "engginer"});

        expect(response.body.name).to.eql("nadira");
        expect(response.body.job).to.eql("engginer");
    })
})

describe("Get Resource single reqres", function() {
    it("Success get data - 200" , async function(){
        const response = await request
        .get("/api/unknown/2")
        .send();

        expect(response.body.data.id).to.eql(2);
        expect(response.body.data.year).to.eql(2001);
    })
})