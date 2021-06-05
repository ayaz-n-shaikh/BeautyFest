import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetProductService {

    url = 'https://beauty--fest.herokuapp.com/login/dashboard/product'
    constructor(private httpClient: HttpClient) { }
    

     getAllProducts() {
        return this.httpClient.get(this.url)
      }
    

     getproduct()
     {
         return this.httpClient.get(this.url)
     }
     
}