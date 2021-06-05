import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomoeopathyService {

    url = 'https://beauty--fest.herokuapp.com/MRlogin/homoeopathy'
    constructor(private httpClient: HttpClient) { }
    

     getHomoeopathy() {
        return this.httpClient.get(this.url)
      }
    

      
}