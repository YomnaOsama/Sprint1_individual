import { Component, OnInit } from '@angular/core';
import { StoreService } from './store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  tableData: any[];
  oldProduct: any;
  divaya=false;
  divaya2=false;
  oldName: String = "";
  oldPrice: Number = 0;
  oldSeller: String = "";
  
  
  
  constructor(private storeservice:StoreService) { }

  ngOnInit() {
    this.getProducts();

  }

  reload(): void{
    var self = this;
    this.storeservice.getProducts()
    .subscribe(function(prods) {
      self.tableData = prods.data;
    })
  };


  getProducts(): void {
    var self = this;
    this.storeservice.getProducts()
    .subscribe(function(prods) {
      self.tableData = prods.data;
      self.tableData = self.tableData.filter(function(element, index, array){
        return element.SellerName === 'yomna';
      });
    });
  }//end getProuducts




  createProduct(product: any): void {
    var self = this;
    this.storeservice.createProduct(product).subscribe();
    this.getProducts();
    this.tableData.unshift(product);
  }//end create

  updateProduct(newProduct): void{
    const product = this.oldProduct;
    this.storeservice.updateProduct(product,newProduct).subscribe();
    this.getProducts();
  }//end update


  deleteProduct(dProduct): void{
    this.tableData = this.tableData.filter(product => product._id !== dProduct._id);
    this.storeservice.deleteProduct(dProduct).subscribe(() => console.log('Product Deleted!'));
  }//end delete


  showDivaya(): void{
    this.divaya=true;
  }

  showDivaya2(product): void{
    this.oldName = product.name;
    this.oldPrice = product.price;
    this.oldSeller = product.sellerName;
    this.oldProduct = product;
    this.divaya2=true;
  }

  sheelDivaya(): void{
    this.divaya=false;
  }

  sheelDivaya2(): void{
    this.divaya2=false;
  }


}