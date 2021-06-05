
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserOrdersService {
    http: HttpClient
    url1 = 'https://beauty--fest.herokuapp.com/MRlogin/cart/confirmorder'   //express port 4000

   
    
    constructor(httpClient: HttpClient) {
        this.http = httpClient
       
        console.log(this.url1);
     }

     
     UpdateOrders(
        OrderDate:String,
        deliveryDate:String,
        PaymentMode: number,
        customerid:number,
        customerName:String,
        addressofcustomer:String,
        customerphoneno:String

        )
        
        {
        
        const body = {
            OrderDate:OrderDate,
            deliveryDate:deliveryDate,
            PaymentMode:PaymentMode,
            customerid:customerid,
            customerName:customerName,
            addressofcustomer:addressofcustomer,
            customerphoneno:customerphoneno
            
        }

        return this.http.put(this.url1, body)
    } 


    InsertLocation(fullname:String,phoneno:String,state:String,city:String,pincode:String,address:String,customerid:number)
    {
        const body = {
            fullname:fullname,
            phoneno:phoneno,
            state:state,
            city:city,
            pincode:pincode,
            address:address,
            customerid:customerid
        }

        return this.http.post(this.url1, body)
    }

    // getFullAddress()
    // {
    //     return this.http.get(this.url1)
    // }
        

}