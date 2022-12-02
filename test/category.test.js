const Categories = require("../src/models/Categories");
const Sequelize = require("sequelize");
const db = require("../src/config/db.config");

const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");
const should = chai.should();

chai.use(chaiHttp);
describe("Categories", () => {
  describe("/GET Categories", () => {
    it("it should GET all the Categoriess", (done) => {
      chai
        .request(server)
        .get("/api/v1/category")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("array");
          done();
        });
    });
    it("it should get a single Categories", (done) => {
      const id = 1;
      chai
        .request(server)
        .get(`/api/v1/category/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
    it("it should not get a single Categories", (done) => {
      const id = 1;
      chai
        .request(server)
        .get(`/api/v1/category/${id}`)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });

  describe("/POST Categories", () => {
    it("it should not create Categories without body payload", (done) => {
      let payload = {};

      chai
        .request(server)
        .post(`/api/v1/category`)
        .send(payload)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a("object");

          done();
        });
    });
    it("it shoud create one Categories", (done) => {
      let payload = {
        name: "Categories1",
        image: "https://i.gojekapi.com/darkroom/goCategories-indonesia/v2/images/uploads/955efb9d-e730-4e54-9519-3a5ca677a447_Go-Biz_20210813_214126.jpeg",
      };
      chai
        .request(server)
        .post(`/api/v1/category`)
        .send(payload)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe("/PATCH Categories", () => {
    it("it should change Categories data", (done) => {
      let payload = {
        price: 20000,
      };
      chai
        .request(server)
        .patch(`/api/v1/category/${1}`)
        .send(payload)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
  });

  describe("/DELETE Categories", () => {
    it("it should delete one Categories", () => {
      chai
        .request(server)
        .delete(`/api/v1/category/${15}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("status").eql("success");
          res.body.should.have.property("data");
        });
    });
  });
});
