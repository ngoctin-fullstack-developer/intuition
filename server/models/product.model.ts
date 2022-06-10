import Color from "./color.model";

export default class Product{
    public no :string;
    public name : string;
    public price : string;
    public description : string;
    public quantity : number;
    public entpNo : string;
    public cateNo : string;
    public insertId : string;
    public insertDate : string;
    public modifiedId : string;
    public modifiedDate : string;
    public sizes : Array<string>;
    public images : Array<string>;
    public colors : Array<Color>;

  constructor(
    no: string, 
    name: string, 
    price: string, 
    description: string, 
    quantity: number, 
    entpNo: string, 
    cateNo: string, 
    insertId: string, 
    insertDate: string, 
    modifiedId: string, 
    modifiedDate: string,
    sizes : Array<string>,
    images : Array<string>,
    colors : Array<Color>
) {
    this.no = no
    this.name = name
    this.price = price
    this.description = description
    this.quantity = quantity
    this.entpNo = entpNo
    this.cateNo = cateNo
    this.insertId = insertId
    this.insertDate = insertDate
    this.modifiedId = modifiedId
    this.modifiedDate = modifiedDate
    this.sizes = sizes
    this.images = images
    this.colors = colors
  }
    // ENTP_NO
    // CATE_NO
    // INSERT_ID	
    // INSERT_DATE	
    // MODIFIED_ID	
    // MODIFIED_DATE
}