import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  serach = new BehaviorSubject(" ")

  constructor(private http:HttpClient) { }

  //http request view all products
  viewAllProducts(){
    return this.http.get("http://localhost:3000/products")
    }
  addProduct(newproduct:any){
   return this.http.post("http://localhost:3000/products",newproduct)
  }
  viewProduct(id:any){
    return this.http.get("http://localhost:3000/products/"+id)
  }
  deleteProduct(id:any){
    return this.http.get("http://localhost:3000/products/"+id)
  }
  editProduct(id:any,productdata:any){
    return this.http.put("http://localhost:3000/products/"+id,productdata)
  }
}
