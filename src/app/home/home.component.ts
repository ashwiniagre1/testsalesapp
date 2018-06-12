import {Component} from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'homeqq',
  templateUrl: 'home.html'
})
export class HomeComponent {
   menuData:any;	
  constructor(private _router : Router){
    
 this.menuData=[{"text":"Testinventory","expand":true,"children":[{"text":"Add Item","routerLink":"testinventory/additem","selected":false},{"text":"Product details","routerLink":"testinventory/productdetails","selected":false},{"text":"Testui","routerLink":"testinventory/testui","selected":false},{"text":"TESTLOGINtEMP","routerLink":"testinventory/testlogintemp","selected":false}]},{"text":"Regiondomain","expand":true,"children":[{"text":"Test","routerLink":"regiondomain/test","selected":false},{"text":"Vertiacalform","routerLink":"regiondomain/vertiacalform","selected":false}]}];   }
  routeToLink(data: any){
     if(!data.hasOwnProperty('children') && data.routerLink)
      this._router.navigate([data.routerLink]);
  }
}
