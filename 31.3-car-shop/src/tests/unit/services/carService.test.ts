import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp = require('chai-http');
import CarService from '../../../services/CarService';
import { car, carList } from '../mocks/carMock'

chai.use(chaiHttp);

const { expect } = chai;

const carService = new CarService()


  describe('Testing CREATE car Service', () => {

  before(async () => {
    sinon
      .stub(carService.model, 'create')
      .resolves(car as any);
  });

  after(()=>{
    sinon.restore()
  })

  it('Returns the created car', async () => {
    const response = await carService.create(car)
  expect(response).to.be.equal(car);
  });

});

describe('Testing READ car Service', () => {

  before(async () => {
    sinon
      .stub(carService.model, 'read')
      .resolves(carList as any);
  });

  after(()=>{
    sinon.restore()
  })

  it('Returns all created Cars', async () => {
    const response = await carService.read()
    expect(response).to.be.an('array');
    expect(response).to.be.equal(carList);
  });

});

