
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AddDRService {
    http: HttpClient
    url = 'https://beauty--fest.herokuapp.com/dashboard/dr'   //express port 4000

    constructor(httpClient: HttpClient) {
        this.http = httpClient
     }

     
     addDR(
        name: string,
        listofproducts: string,
        creater: string,
        description: string,
        image: any ){
        /*
        const body = {
            name: name,
            listofproducts:  listofproducts,
            creater:   creater,
            description:    description,
            image: image,
        }
*/       
        const body = new FormData()
        body.append('name', name)
        body.append('listofproducts',listofproducts)
        body.append('creater',creater)
        body.append('description',description)
        body.append('image',image)
    

        return this.http.post(this.url, body)
    } 
    deleteProduct(id: number) {
        return this.http.delete(this.url + '/' + id)
     } 
    getAllProducts() {
        return this.http.get(this.url)
    }
}