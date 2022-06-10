export default class OrderDetail {
    public orderNo : string;
    public productNo : string;
    public quantity : number;
    public total : string;


  constructor(
    orderNo: string, 
    productNo: string, 
    quantity: number, 
    total: string
) {
    this.orderNo = orderNo
    this.productNo = productNo
    this.quantity = quantity
    this.total = total
  }

}