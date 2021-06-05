
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MRordersListService {

    http: HttpClient
    url = 'https://beauty--fest.herokuapp.com/MRlogin/dashboard/MRorders'   //express port 4000
    url1 = 'https://beauty--fest.herokuapp.com/MRlogin/orders'
    constructor(httpClient: HttpClient) {
        this.http = httpClient
     }

     getAllProducts(id:number) {
         this.url = this.url + '/' +id
         console.log(this.url)
        return this.http.get(this.url)
      }
    


     deleteProduct(id: number) {
        
        this.url1 = this.url1+ '/'+id
        return this.http.delete(this.url1)
       
      }
    
}
