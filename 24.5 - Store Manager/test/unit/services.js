const sinon = require("sinon");
const { expect } = require("chai");

const productsModel = require("../../models/productsModel");
const productsService = require("../../services/productsService");
const salesModel = require("../../models/salesModel");
const salesService = require("../../services/salesService");

describe("Condition if there is no product created", () => {
    before(() => {
      sinon.stub(productsModel, "getProduct").resolves([]);
    });

    after(() => {
      productsModel.getProduct.restore();
    });
    it("if it returns an array", async () => {
      const response = await productsService.getProduct();

      expect(response).to.be.an("array");
    });

    it("if the returned array is empty", async () => {
      const response = await productsService.getProduct();

      expect(response).to.be.empty;
    });
  });

  describe("Condition when there are created products", () => {
    before(() => {
      sinon.stub(productsModel, "getProduct").resolves([
        {
          id: 1,
          name: "Coca-Cola",
          quantity: 3,
        },
        {
          id: 2,
          name: "Coxinha",
          quantity: 3,
        },
        {
          id: 3,
          name: "Guarana",
          quantity: 5,
        },
      ]);
    });

    after(() => {
      productsModel.getProduct.restore();
    });

    it(' Get products function return array with keys { id, name, quantity } "', async () => {
      const [products] = await productsService.getProduct();

      expect(products).to.include.all.keys(
        "id",
        "name",
        "quantity"
      );
    });

    it("Returns a filtered array of products", async () => {
      const filteredProduct = await productsService.filterProduct({id: 3});

      //https://medium.com/building-ibotta/testing-arrays-and-objects-with-chai-js-4b372310fe6d
      //onde aprendi deep equality ( to.eql ) no Chai

      expect(filteredProduct).to.eql([ { id: 3, name: 'Guarana', quantity: 5 } ])

    });
  });

 
  describe("Condition when there are created sales", () => {
    before(() => {
      sinon.stub(salesModel, "getSale").resolves([
        {
          product_id: 1,
          quantity: 8,
        },
        {
          product_id: 2,
          quantity: 4,
        },
        {
          product_id: 3,
          quantity: 7,
        },
      ]);
    });

    after(() => {
      salesModel.getSale.restore();
    });

    it("Returns a filtered array of sales", async () => {
      const filteredSale = await salesService.saleFilter({product_id: 3});

      expect(filteredSale).to.eql([ { product_id: 3, quantity: 7 } ])

    });
  });
