
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AllOrderListService {

    http: HttpClient
    url = 'https://beauty--fest.herokuapp.com/dashboard/orders'   //express port 4000
    url1 = 'https://beauty--fest.herokuapp.com/MRlogin/orders'

    constructor(httpClient: HttpClient) {
        this.http = httpClient
     }

     getAllProducts() {
        return this.http.get(this.url)
      }
    
     deleteProduct(id: number) {
        
        this.url1 = this.url1+ '/'+id
        return this.http.delete(this.url1)
       
      }
    
}
