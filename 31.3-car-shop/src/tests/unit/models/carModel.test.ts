import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp = require('chai-http');
import CarModel from '../../../models/CarModel';
import { car, carList } from '../mocks/carMock'


chai.use(chaiHttp);

const { expect } = chai;

const carModel = new CarModel()


  describe('Testing Car Create Model ', () => {

  before(async () => {
    sinon
      .stub(carModel.model, 'create')
      .resolves(carList[0] as any);
  });

  after(()=>{
    sinon.restore()
  })

  it('Returns the created car from database', async () => {
    const response = await carModel.create(car as any)
    expect(response).to.be.equal(carList[0]);
  });

});


describe('Testing Car Read Model ', () => {

  before(async () => {
    sinon
      .stub(carModel.model, 'find')
      .resolves(carList as any);
  });

  after(()=>{
    sinon.restore()
  })

  it('Returns an list with all created cars', async () => {
  const response = await carModel.read()
  expect(response).to.be.equal(carList);

});
});

describe('Testing Car ReadOne Model ', () => {

  before(async () => {
    sinon
      .stub(carModel.model, 'findOne')
      .resolves(carList[1] as any);
  });

  after(()=>{
    sinon.restore()
  })

  it('Returns the filtered Car', async () => {
  const response = await carModel.readOne('6262a9eab1a54dc7debbb9ea')
  expect(response).to.be.equal(carList[1]);

});
});
