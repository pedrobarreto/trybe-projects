export interface IProduct {
  name:string,
  amount:string,
}

export interface Product extends IProduct {
  id: number,
}

export interface ProductOrder { 
  productId: number,
  orderId: number,

}

export interface OrderId { 
  orderId: number,

}

export interface IOrder { 
  userId: number,
}

export interface Order extends IOrder { 
  products: number,
}

export interface OrderArray extends IOrder { 
  products: number[],
}
