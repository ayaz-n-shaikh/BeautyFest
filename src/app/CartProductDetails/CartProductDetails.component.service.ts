import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CartProductDetailsService {

    url = 'https://beauty--fest.herokuapp.com/login/dashboard/product/'
    url1 ='https://beauty--fest.herokuapp.com/MRlogin/cartEdit'
    url2 = 'https://beauty--fest.herokuapp.com/MRlogin/cartDelete'

    constructor(private httpClient: HttpClient) { }
    

    getProduct(id: number)
    {
        return this.httpClient.get(this.url + id)
    }


    postInCart(Quantity:number,totalAmount:number,totalDiscount:number,customerid:number,productID:number,orderDetailsTableID:number)
    {
        const body = {
            Quantity:Quantity,
            totalAmount:totalAmount,
            totalDiscount:totalDiscount,
            customerid:customerid,
            productID:productID,
            orderDetailsTableID:orderDetailsTableID
        }

        return this.httpClient.put(this.url1,body)
    }

    DeleteFromCart(id:number)
    {
        const body = {
            id:id
        }

        return this.httpClient.post(this.url2,body)
    }



}