import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AyurvedicService {

    url = 'https://beauty--fest.herokuapp.com/MRlogin/ayurvedic'
    constructor(private httpClient: HttpClient) { }
    

     getAyurvedic() {
        return this.httpClient.get(this.url)
      }
    
     
}