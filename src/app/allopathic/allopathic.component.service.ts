import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AllopathicService {

    url = 'https://beauty--fest.herokuapp.com/MRlogin/allopathic'
    constructor(private httpClient: HttpClient) { }
    

     getAllopathic() {
        return this.httpClient.get(this.url)
      }
    
}