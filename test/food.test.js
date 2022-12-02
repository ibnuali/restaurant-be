const food = require("../src/models/food");
const Sequelize = require("sequelize");
const db = require("../src/config/db.config");

const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");
const should = chai.should();

chai.use(chaiHttp);
describe("food", () => {
  describe("/GET food", () => {
    it("it should GET all the foods", (done) => {
      chai
        .request(server)
        .get("/api/v1/food")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("array");
          done();
        });
    });
    it("it should get a single food", (done) => {
      const id = 1;
      chai
        .request(server)
        .get(`/api/v1/food/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
    it("it should not get a single food", (done) => {
      const id = 1;
      chai
        .request(server)
        .get(`/api/v1/food/${id}`)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });

  describe("/POST food", () => {
    it("it should not create food without body payload", (done) => {
      let payload = {};

      chai
        .request(server)
        .post(`/api/v1/food`)
        .send(payload)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a("object");

          done();
        });
    });
    it("it shoud create one food", (done) => {
      let payload = {
        name: "food1",
        price: 18000,
        image: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/955efb9d-e730-4e54-9519-3a5ca677a447_Go-Biz_20210813_214126.jpeg",
        categoryId: 1,
        description: "lorem ipsum",
        duration: "10-20",
      };
      chai
        .request(server)
        .post(`/api/v1/food`)
        .send(payload)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe("/PATCH food", () => {
    it("it should change food data", (done) => {
      let payload = {
        price: 20000,
      };
      chai
        .request(server)
        .patch(`/api/v1/food/${1}`)
        .send(payload)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
  });

  describe("/DELETE food", () => {
    it("it should delete one food", () => {
      chai
        .request(server)
        .delete(`/api/v1/food/${15}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("status").eql("success");
          res.body.should.have.property("data");
        });
    });
  });
});
