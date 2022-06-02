import { IProduct } from "./product.model";

export interface ICartItem {
    product: IProduct,
    quantity: number
}

export interface ICart {
    items: Array<ICartItem>,
    quantity : number,
    total : number
}

export const initialCart: ICart = {
    items: [
        {
            product: {
                no: '1',
                name: 'Product',
                cate_no: 1,
                description: 'description ',
                entp_no: 1,
                images: [],
                insert_date: '23/05/2022',
                insert_id: 'ngoctin',
                modified_date: '23/05/2022',
                modify_id: 'ngoctin',
                price: '100000',
                quantity: 10,
                sizes: ['S', 'M', 'L', 'XL', 'XXL']
            },
            quantity: 5
        },
        {
            product: {
                no: '2',
                name: 'Product',
                cate_no: 1,
                description: 'description ',
                entp_no: 1,
                images: [],
                insert_date: '23/05/2022',
                insert_id: 'ngoctin',
                modified_date: '23/05/2022',
                modify_id: 'ngoctin',
                price: '100000',
                quantity: 10,
                sizes: ['S', 'M', 'L', 'XL', 'XXL']
            },
            quantity: 5
        },
        {
            product: {
                no: '3',
                name: 'Product',
                cate_no: 1,
                description: 'description ',
                entp_no: 1,
                images: [],
                insert_date: '23/05/2022',
                insert_id: 'ngoctin',
                modified_date: '23/05/2022',
                modify_id: 'ngoctin',
                price: '100000',
                quantity: 10,
                sizes: ['S', 'M', 'L', 'XL', 'XXL']
            },
            quantity: 5
        },
        {
            product: {
                no: '4',
                name: 'Product',
                cate_no: 1,
                description: 'description ',
                entp_no: 1,
                images: [],
                insert_date: '23/05/2022',
                insert_id: 'ngoctin',
                modified_date: '23/05/2022',
                modify_id: 'ngoctin',
                price: '100000',
                quantity: 10,
                sizes: ['S', 'M', 'L', 'XL', 'XXL']
            },
            quantity: 5
        },
        {
            product: {
                no: '5',
                name: 'Product',
                cate_no: 1,
                description: 'description ',
                entp_no: 1,
                images: [],
                insert_date: '23/05/2022',
                insert_id: 'ngoctin',
                modified_date: '23/05/2022',
                modify_id: 'ngoctin',
                price: '100000',
                quantity: 10,
                sizes: ['S', 'M', 'L', 'XL', 'XXL']
            },
            quantity: 5
        },
    ],
    quantity : 25,
    total : 2500000
}