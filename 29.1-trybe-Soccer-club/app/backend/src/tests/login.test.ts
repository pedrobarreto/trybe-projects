import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../app';

import { validUserResponse, ValidUserRequest } from './mocks/login';
import User from '../database/models/UserModel';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes do endpoint /Login', () => {

  let chaiHttpResponse: Response;

  before(async () => sinon
    .stub(User, "findOne")
    .resolves({ ...validUserResponse[0]} as unknown as User ));

  after(()=>{
    (User.findOne as sinon.SinonStub).restore();
  })
 
  it('Testa se os campos de Username e Password foram enviados corretamente', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .post('/login')
       .send(ValidUserRequest)
       expect(chaiHttpResponse).to.have.status(200);
  });

});

