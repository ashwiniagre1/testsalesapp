/**
 * Created by: MetaMagic
 * Date: 12/06/2018
 * Organization: MetaMagic	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'testlogintemp',
  templateUrl: 'testlogintemp.component.html'
})
export class TestlogintempComponent implements OnInit{
  testlogintempModel:TestlogintempModel;
 
  constructor(private http: HttpClient) {
    this.testlogintempModel=new TestlogintempModel();
       }
  onBlur_EmailId(eventData:any){} 
  input_EmailId(eventData:any){} 
  focus_EmailId(eventData:any){} 
  onBlur_Password(eventData:any){} 
  input_Password(eventData:any){} 
  focus_Password(eventData:any){} 
  onClick_register(eventData:any){} 
  onClick_login(eventData:any){} 
  ngOnInit(){
  }
 

   
}
export class TestlogintempModel{
  EmailId: string;  Password: string; }
