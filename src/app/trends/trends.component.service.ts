import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetTrendsService {

    url = 'https://beauty--fest.herokuapp.com/login/dashboard/dr'
    constructor(private httpClient: HttpClient) { }
    

     getAlltrends() {
        return this.httpClient.get(this.url)
      }
    

     gettrends()
     {
         return this.httpClient.get(this.url)
     }
     
}