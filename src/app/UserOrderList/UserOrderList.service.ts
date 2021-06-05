
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserOrderListService {

    http: HttpClient
    url = 'https://beauty--fest.herokuapp.com/MRlogin/orders'   //express port 4000

    constructor(httpClient: HttpClient) {
        this.http = httpClient
     }

     getAllProducts(customerid:number) {
         const body = {
             customerid:customerid
         }
        return this.http.post(this.url,body)
      }
    
     deleteProduct(id: number) {
        
        this.url = this.url+ '/'+id
        return this.http.delete(this.url)
       
      }
    
}
