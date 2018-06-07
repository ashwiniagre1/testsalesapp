/**
 * Created by: MetaMagic
 * Date: 05/06/2018
 * Organization: MetaMagic	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'additem',
  templateUrl: 'additem.component.html'
})
export class AdditemComponent implements OnInit{
  additemModel:AdditemModel;
 
  constructor(private http: HttpClient) {
    this.additemModel=new AdditemModel();
       }
  onBlur_itemid(eventData:any){} 
  input_itemid(eventData:any){} 
  focus_itemid(eventData:any){} 
  onBlur_name(eventData:any){} 
  input_name(eventData:any){} 
  focus_name(eventData:any){} 
  onBlur_price(eventData:any){} 
  input_price(eventData:any){} 
  focus_price(eventData:any){} 
  onClick_btn(eventData:any){} 
  ngOnInit(){
  }
 

   
}
export class AdditemModel{
  itemid: string;  name: string;  price: number; }
