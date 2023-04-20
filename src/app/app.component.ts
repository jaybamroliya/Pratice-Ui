import { Component,ViewContainerRef,ComponentFactoryResolver } from '@angular/core';
import {NgForm,FormControl,FormGroup,Validators} from '@angular/forms';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { UserDataService } from './services/user-data.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Basic Form';
  users:any;
  constructor(private userData:UserDataService,private viewContainer:ViewContainerRef, private cfr:ComponentFactoryResolver)  {
    userData.users().subscribe((data) =>{
      this.users=data
      console.warn("data",data);
      
    })
  }

  getUserFromData(data:any){
   this.userData.saveUser(data).subscribe((res) =>{
    console.warn(res);
    
   }) 
  }
  
  // userData:any={}; 

  // getData(data:NgForm){
  //   console.warn(data);
  //   this.userData=data;
  // }

  display = false;
  toggle(){
    this.display=!this.display
  }

  list:any[]=[];

  addTask(item:string){
    this.list.push({id:this.list.length, name:item});
    console.warn(this.list);
  }

  removeTask(id:number){
    console.warn(id);
    this.list=this.list.filter(item => item.id !==id);
    
  }
   
  // data = 10;
  // updateChaild(){
  //   this.data = Math.floor(Math.random()*10)
  // }

  // userDetails=[
  //   {name:'Jay',email:'jaybamroliya05@gmail.com'},
  //   {name:'Kaushal',email:'Kaushal@gmail.com'}
  // ]

  data= "x";
  updateData(item:string){
    console.warn(item);
    this.data=item
  }
name:any;

getValue(item:any){
  console.warn(item);
  
}

home = Date();

userLogin(item:any){
  console.warn(item);
  
}

loginForm= new FormGroup({
  user:new FormControl('',[Validators.required]), 
  password:new FormControl('')
});

loginUser(){
  console.warn(this.loginForm.value);
  
}


get user(){
  return this.loginForm.get('user');
}

async loadAdmin(){
this.viewContainer.clear();
// const (AdminlistComponent) =await import('./adminlist/adminlist.component')
}


}
