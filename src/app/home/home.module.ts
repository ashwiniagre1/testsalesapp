/**
 * Created by Sagar Jadhav.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./home.component";
import {CommonModule} from "@angular/common";
import {TopNavBarComponent} from "../layout/topnavbar.component";
import {AmexioWidgetModule} from "amexio-ng-extensions";

const routes: Routes = [
  { path: '', component:HomeComponent,
    children: [
          	{
     	path: 'testinventory/additem', loadChildren: './../pages/testmaterial/testinventory/additem/additem.module#AdditemModule'
     	},	
	     	{
     	path: 'testinventory/productdetails', loadChildren: './../pages/testmaterial/testinventory/productdetails/productdetails.module#ProductdetailsModule'
     	},	
	     	{
     	path: 'regiondomain/test', loadChildren: './../pages/region/regiondomain/test/test.module#TestModule'
     	},	
	    ]
  }
];


@NgModule({
  imports: [
    CommonModule, FormsModule,
    RouterModule.forChild(routes),
    AmexioWidgetModule
  ],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    TopNavBarComponent
  ]
})
export class HomeModule {
}