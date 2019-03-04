var should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest'),
    api = supertest('api.airvisual.com/v2');
_ = require('lodash')

describe('Simple Test', function () {

    var key = "YfqQfd3mLj3QCfGh5"

    it('should return a 200 response', function (done) {
        api.get(`/states?country=Australia&key=${key}`)
            .set('Accept', 'application/json')
            .expect(200, done);
    });

    it('should return a 403 response', function (done) {
        api.get(`/states?country=Australia&key=${key}1`)
            .set('Accept', 'application/json')
            .expect(403, done);
    });

    it('should be an object with keys and values', function (done) {
        api.get(`/states?country=Australia&key=${key}`)
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
                let myStates = [{
                    "state": 'New South Wales'
                }, {
                    "state": 'Queensland'
                }, {
                    "state": "South Australia"
                }, {
                    "state": 'Tasmania'
                }, {
                    "state": 'Victoria'
                }, {
                    "state": 'Western Australia'
                }]
                expect(_.isEqual(res.body.data, myStates)).to.equal(true)
                done();
            });
    });

    it('should have lon and lat of 144.93464, -37.839517', function (done) {
        api.get(`/nearest_city?key=${key}`)
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
                let myCords = [144.93464, -37.839517]
                expect(_.isEqual(res.body.data.location.coordinates, myCords)).to.equal(true)
                done();
            });

    });


    it('should have contain the correct json format', function (done) {
        api.get(`/nearest_city?key=${key}`)
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {

                expect(res.body.data).to.have.property("city");
                expect(res.body.data).to.have.property("state");
                expect(res.body.data).to.have.property("country");
                expect(res.body.data).to.have.property("location");
                expect(res.body.data.location).to.have.property("type");
                expect(res.body.data.location).to.have.property("coordinates");
                expect(res.body.data.current).to.have.property("weather");
                expect(res.body.data.current.weather).to.have.property("ts");
                expect(res.body.data.current.weather).to.have.property("hu");
                expect(res.body.data.current.weather).to.have.property("ic");
                expect(res.body.data.current.weather).to.have.property("pr");
                expect(res.body.data.current.weather).to.have.property("tp");
                expect(res.body.data.current.weather).to.have.property("wd");
                expect(res.body.data.current.weather).to.have.property("ws");
                expect(res.body.data.current.weather).to.have.property("ic");
                expect(res.body.data.current.weather).to.have.property("ic");
                expect(res.body.data.current).to.have.property("pollution");
                expect(res.body.data.current.pollution).to.have.property("ts");
                expect(res.body.data.current.pollution).to.have.property("aqius");
                expect(res.body.data.current.pollution).to.have.property("mainus");
                expect(res.body.data.current.pollution).to.have.property("aqicn");
                expect(res.body.data.current.pollution).to.have.property("maincn");
                done();
            });

    });

});