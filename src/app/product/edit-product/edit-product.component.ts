import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{
  productid:any
  productdata:any
constructor(private ar:ActivatedRoute,private ps:ProductserviceService,private router:Router) {}
ngOnInit(): void {
  this.ar.params.subscribe((data:any)=>{
    this.productid=data["id"]
  })
  this.ps.viewProduct(this.productid).subscribe((item:any)=>{
    this.productdata=item
  })
}
updateproduct(form:any){
  let updateproduct={
    id:form.value.id,
    productName:form.value.productName,
    categoryId: form.value.categoryId,
    description: form.value.description,
    price:  form.value.price,
    isAvailable: form.value.isAvailable,
    productImage: form.value.productImage,
    rating: form.value.rating,
    review: form.value.review,
    vendorName: form.value.vendorName,
    warrenty: form.value.warrenty
  }
  this.ps.editProduct(this.productid,this.productdata).subscribe((item:any)=>{
    alert("product details updated")
    this.router.navigateByUrl("product")
  })

}
}
