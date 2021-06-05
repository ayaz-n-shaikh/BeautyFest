import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ProductDetailsService {

    url = 'https://beauty--fest.herokuapp.com/login/dashboard/product/'
    url1 ='https://beauty--fest.herokuapp.com/MRlogin/cart'

    constructor(private httpClient: HttpClient) { }
    

    getProduct(id: number)
    {
        return this.httpClient.get(this.url + id)
    }


    postInCart(Quantity:number,totalAmount:number,totalDiscount:number,customerid:number,productID:number)
    {
        const body = {
            Quantity:Quantity,
            totalAmount:totalAmount,
            totalDiscount:totalDiscount,
            customerid:customerid,
            productID:productID
        }

        return this.httpClient.post(this.url1,body)
    }



}