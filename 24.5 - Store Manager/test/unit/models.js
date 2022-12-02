const sinon = require("sinon");
const { expect } = require("chai");
const productsModel = require("../../models/productsModel");
const salesModel = require("../../models/salesModel");
const connection = require("../../models/connection");

const id = 1;
const productId = 2;
const quantity = 23;

describe("Query products created in MYSQL", () => {
  describe("Condition if there is no product created", () => {
    before(() => {
      sinon.stub(connection, "execute").resolves([[]]);
    });

    after(() => {
      connection.execute.restore();
    });
    it("if it returns an array", async () => {
      const response = await productsModel.getProduct();

      expect(response).to.be.an("array");
    });

    it("if the returned array is empty", async () => {
      const response = await productsModel.getProduct();

      expect(response).to.be.empty;
    });
  });
})

  describe("Condition when there are created products", () => {
    before(() => {
      sinon.stub(connection, "execute").resolves([
        [
          {
            id: 1,
            name: "Coca-Cola",
            quantity: 3,
          },
          {
            id: 2,
            name: "Coxinha",
            quantity: 5,
          },
        ],
      ]);
    });

    after(() => {
      connection.execute.restore();
    });

    it("if it returns an array", async () => {
      const response = await productsModel.getProduct();

      expect(response).to.be.an("array");
    });

    it("if the returned array is not empty", async () => {
      const response = await productsModel.getProduct();

      expect(response).to.have.lengthOf(2);

    });

    it('if returned product object contains property name', async () => {
      const [product] = await productsModel.getProduct();

      expect(product).to.have.property('name')
    });
  });

   describe("Condition when there are created products", () => {
    before(() => {
      sinon.stub(connection, "execute").resolves([
        [
          {
            id: 1,
            name: "Coca-Cola",
            quantity: 3,
          },
          {
            id: 2,
            name: "Coxinha",
            quantity: 5,
          },
        ],
      ]);
    });

    after(() => {
      connection.execute.restore();
    });

    it("if it returns an array", async () => {
      const response = await productsModel.getProduct();

      expect(response).to.be.an("array");
    });

    it("if the returned array is not empty", async () => {
      const response = await productsModel.getProduct();

      expect(response).to.have.lengthOf(2);

    });

    it('if returned product object contains property name', async () => {
      const [product] = await productsModel.getProduct();

      expect(product).to.have.property('name')
    });

  });



describe("Query sales created in MYSQL", () => {
  describe("Condition when there is no sale created", () => {
    before(() => {
      sinon.stub(connection, "execute").resolves([[]]);
    });

    after(() => {
      connection.execute.restore();
    });
    it("if it returns an array", async () => {
      const response = await salesModel.getSale();

      expect(response).to.be.an("array");

    });

    it("if the returned array is empty", async () => {
      const response = await salesModel.getSale();

      expect(response).to.have.lengthOf(0);
    });
  });
})

  describe("Condition when there are created sales", () => {
    before(() => {
      sinon.stub(connection, "execute").resolves([
        [
          {
            "product_id": 1,
             "quantity": 1
          },
          {
            "product_id": 2,
            "quantity": 5
          }
        ]
      ]);
    });

    after(() => {
      connection.execute.restore();
    });

    it("if it returns an array", async () => {
      const response = await salesModel.getSale();

      expect(response).to.be.an("array");
    });

    it("if returned array have length of 2", async () => {
      const response = await salesModel.getSale();

      expect(response).to.have.lengthOf(2);
    });
    it('if returned sale object contains property product_id"', async () => {
      const [sale] = await salesModel.getSale();

      expect(sale).to.have.property('product_id')
    });
  });

  describe("Condition when sales are created/updated", () => {
    before(() => {
      sinon.stub(connection, "execute").resolves([
        [
          {
            id: 1,
            product_id: 1,
             quantity: 2
          },
          {
            id: 1,
            product_id: 2,
             quantity: 2
          },
        ]
      ]);
    });

    after(() => {
      connection.execute.restore();
    });

    it("if it returns property { itemUpdated } ", async () => {
     
      const response = await salesModel.updateSale(id, productId, quantity);

      expect(response).to.have.property('itemUpdated')
    });

    it("if it returns property { itemSold } ", async () => {
      const response = await salesModel.productWithSale(id, productId, quantity);

      expect(response).to.have.property('itemsSold')
    });

  })

