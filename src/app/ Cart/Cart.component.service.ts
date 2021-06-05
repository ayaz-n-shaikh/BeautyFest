import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CartService {

    url='https://beauty--fest.herokuapp.com/MRlogin/addcart'

    constructor(private httpClient: HttpClient) { }
    
    getCart(customerid:number)
    {      
        const body = {
            customerid:customerid
        }
        return this.httpClient.post(this.url,body)
    }



}