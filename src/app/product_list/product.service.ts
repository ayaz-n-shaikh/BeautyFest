
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ProductService {

    http: HttpClient
    url = 'https://beauty--fest.herokuapp.com/login/dashboard/product'   //express port 4000

    constructor(httpClient: HttpClient) {
        this.http = httpClient
     }

     getAllProducts() {
        return this.http.get(this.url)
      }
    

     getproduct()
     {
         return this.http.get(this.url)
     }

    deleteProduct(id: number) {
        return this.http.delete(this.url + '/' + id)
      }
    
}
