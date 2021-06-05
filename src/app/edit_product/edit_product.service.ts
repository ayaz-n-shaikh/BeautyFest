import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Injectable()
export class EditProductService {

    url = 'https://beauty--fest.herokuapp.com/login/dashboard/product/edit_product'
    url1 = 'https://beauty--fest.herokuapp.com/category'

    constructor(private http: HttpClient,private http1:HttpClient) { }
    

    edit_Product(
        name: String,
        price: number,
        discount: number,
        priceWithDiscount: number,
        netweight: Number,
        mgfdate: Date,
        expiredate: Date,
        description: String,
        categoryid: number,
        id: number
    )
    {
        const body={
            name:name,
            price:price,
            discount:discount,
            priceWithDiscount:priceWithDiscount,
            netweight:netweight,
            mgfdate:mgfdate,
            expiredate:expiredate,
            description:description,
            categoryid:categoryid,
            id:id
        }


    return this.http.put(this.url + '/' + id, body)
    }

    
    getUserDetails(id:number)
    {
        return this.http.get(this.url + '/' + id)
    }

    getCategories()
    {
        return this.http1.get(this.url1)
    }

}