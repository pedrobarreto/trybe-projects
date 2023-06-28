import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp = require('chai-http');
import server from '../../../server';
import CarModel from '../../../models/CarModel';
import { car, carList } from '../mocks/carMock'

chai.use(chaiHttp);

const { expect } = chai;

const carModel = new CarModel()
const app = server.getApp();


  describe('Testing POST /cars endpoint ', () => {

  before(async () => {
    sinon
      .stub(carModel.model, 'create')
      .resolves(carList[0] as any);
  });

  after(()=>{
    sinon.restore()
  })

  it('Returns status 201 from post /cars endpoint', async () => {
    const response = await chai
    .request(app)
    .post('/cars')
    .send(car);
  expect(response.status).to.be.equal(201);
  expect(response.body).to.be.an('object');
  });

});

  describe('Testing GET /cars endpoint ', () => {

    before(async () => {
      sinon
        .stub(carModel.model, 'find')
        .resolves(carList as any);
    });
  
    after(()=>{
      sinon.restore()
    })
  
    it('Returns status 200 from get /cars endpoint', async () => {
      const response = await chai
      .request(app)
      .get('/cars')
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.an('array');
    });

});

describe('Testing GET /cars/:id endpoint ', () => {

  before(async () => {
    sinon
      .stub(carModel.model, 'findOne')
      .resolves();
  });

  after(()=>{
    sinon.restore()
  })

  it('Returns Error status 404 if sending wrong id to /cars endpoint', async () => {
    const response = await chai
    .request(app)
    .get('/cars/999')
    expect(response.status).to.be.equal(404);
    expect(response.body).to.be.an('object');
  });

});

describe('Testing PUT /cars/:id endpoint ', () => {

  before(async () => {
    sinon
      .stub(carModel.model, 'update')
      .resolves();
  });

  after(()=>{
    sinon.restore()
  })

  it('Returns Error status 400 if sending wrong id to /cars endpoint', async () => {
    const response = await chai
    .request(app)
    .put('/cars/8h8dad9h8hasdh89h89ad')
    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.deep.equal({ error :"Id must have 24 hexadecimal characters"})
  });

});

