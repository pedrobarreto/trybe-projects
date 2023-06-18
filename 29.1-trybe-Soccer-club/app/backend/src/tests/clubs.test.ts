import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../app';

import { ClubsResponse } from './mocks/clubs';
import Club from '../database/models/ClubModel';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes do endpoint /clubs', () => {

  let chaiHttpResponse: Response;

  before(async () => sinon
    .stub(Club, "findAll")
    .resolves(ClubsResponse as unknown as Club[]));

  after(()=>{
    (Club.findAll as sinon.SinonStub).restore();
  })
 
  it('Testa se os clubes são retornados corretamente', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .get('/clubs')
       expect(chaiHttpResponse).to.have.status(200);
       expect(chaiHttpResponse.body).to.be.a('array');
  });

});

