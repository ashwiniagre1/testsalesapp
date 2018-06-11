/**
 * Created by: MetaMagic
 * Date: 11/06/2018
 * Organization: MetaMagic	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'vertiacalform',
  templateUrl: 'vertiacalform.component.html'
})
export class VertiacalformComponent implements OnInit{
  vertiacalformModel:VertiacalformModel;
 
  constructor(private http: HttpClient) {
    this.vertiacalformModel=new VertiacalformModel();
       }
  onBlur_FirstTextInput(eventData:any){} 
  input_FirstTextInput(eventData:any){} 
  focus_FirstTextInput(eventData:any){} 
  onBlur_EmailId(eventData:any){} 
  input_EmailId(eventData:any){} 
  focus_EmailId(eventData:any){} 
  onBlur_SecondTextInput(eventData:any){} 
  input_SecondTextInput(eventData:any){} 
  focus_SecondTextInput(eventData:any){} 
  onBlur_Password(eventData:any){} 
  input_Password(eventData:any){} 
  focus_Password(eventData:any){} 
  onBlur_NumberInput(eventData:any){} 
  input_NumberInput(eventData:any){} 
  focus_NumberInput(eventData:any){} 
  onSelection_CheckBox(eventData:any){} 
  onClick_SubmitBtn(eventData:any){} 
  ngOnInit(){
  }
 

   
}
export class VertiacalformModel{
  FirstTextInput: string;  EmailId: string;  SecondTextInput: string;  Password: string;  NumberInput: number;  CheckBox: string; }
