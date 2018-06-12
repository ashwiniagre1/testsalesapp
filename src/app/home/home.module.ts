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
     	path: 'testinventory/testui', loadChildren: './../pages/testmaterial/testinventory/testui/testui.module#TestuiModule'
     	},	
	     	{
     	path: 'testinventory/testlogintemp', loadChildren: './../pages/testmaterial/testinventory/testlogintemp/testlogintemp.module#TestlogintempModule'
     	},	
	     	{
     	path: 'regiondomain/test', loadChildren: './../pages/region/regiondomain/test/test.module#TestModule'
     	},	
	     	{
     	path: 'regiondomain/vertiacalform', loadChildren: './../pages/region/regiondomain/vertiacalform/vertiacalform.module#VertiacalformModule'
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