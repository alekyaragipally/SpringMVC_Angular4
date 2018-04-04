import { Component, OnInit, Input, Pipe, PipeTransform  } from '@angular/core';
import { AppService } from './app.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {enableProdMode} from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import {NgbModal,ModalDismissReasons,NgbModalRef,NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { SimpleNotificationsModule } from 'angular2-notifications-lite';
import { ToasterService } from './toaster.service';

//import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})

export class AppComponent implements OnInit  {
  //title = 'app';
  public id :any;
  public Employee : any [];
public name: string;
public emailId: string;
public mblNo: string;
public gender: string;
public address: string;
modalRef: NgbModalRef;

public localId: string;

public delete_id: string;

public savebuttondisp: boolean = true;
public updatebuttondisp: boolean = true;
public service_status_stirng: boolean;


constructor( private _appService: AppService,private modalService: NgbModal, private toasterService: ToasterService) { }


ngOnInit() {
 
  
  this._appService.getEmployees().subscribe(data => this.Employee = data).add(data => {

       });
  
       Notification.requestPermission().then(function(result) {
        console.log(result);
      });
}


openPopup(content, ope) {
  console.log("openPopUp");
   let ngbModalOptions: NgbModalOptions = {
   backdrop : 'static',
   keyboard : false
 
 };
 this.savebuttondisp=true;
 this.updatebuttondisp=false;
 
 this.modalRef=this.modalService.open(content,ngbModalOptions);
 
 this.name="";
 this.emailId="";
 this.mblNo="";
 this.gender="";
 this.address="";
}
saveEmployee(){
  console.log("in component");

  let dataObj = {
    name: this.name,
    emailId: this.emailId,
    mblNo: this.mblNo,
    gender: this.gender,
    address: this.address
}
console.log("DataObj====="+JSON.stringify(dataObj));

this._appService.saveData(dataObj).add(data => {
  console.log('done');
  this.ngOnInit(); // add your equivalent for fetching data here!
});
this.toasterService.Success("Employee created successfully!");

this.modalRef.close();
this.clear();
}

clear(){
  this.name="";
  this.emailId="";
  this.mblNo="";
  this.gender="";
  this.address="";
}

editPopup(content,emp){
  console.log("Edit");
  
  this.updatebuttondisp=true;
  this.savebuttondisp=false;
 
  this.modalRef = this.modalService.open(content);

  //options to make popup static
  let ngbModalOptions: NgbModalOptions = {
    backdrop : 'static',
    keyboard : false,
  };

  this.localId=emp.id;
   this.name=emp.name;
 this.emailId=emp.emailId;
   this.mblNo=emp.mblNo;
  this.gender=emp.gender;
  this.address=emp.address;
}

update(){
  console.log("update button clicked");

  let dataobj1 = {
    id: this.localId,
    name: this.name,
    emailId: this.emailId,
    mblNo: this.mblNo,
    gender: this.gender,
    address: this.address
}
console.log("id=="+this.id);
console.log("name=="+this.name);
  console.log("form data======="+JSON.stringify(dataobj1));
this._appService.updateEmp(dataobj1).add(data =>{
console.log(data);
this.ngOnInit(); // add your equivalent for fetching data here!
});
this.modalRef.close();
}

delPopup(content, id) {
  console.log("id====="+id);
  this.modalRef = this.modalService.open(content, {
      size: 'sm',
  });
  this.delete_id = id;
}
deleteEmployee(){
  console.log("delete Employee");
  this.modalRef.close();
        //deletes the data using service class's method
        this._appService.deleteEmployee(this.delete_id).add(data => {
            console.log('done======='+this.delete_id);
            this.ngOnInit(); // add your equivalent for fetching data here!
        });
}

autoSearch()
{
    
    this._appService.autoSearchService(this.emailId).add(data => {
      //  console.log("dAta is"+data+" & name==="+this.name);
                                     this.service_status_stirng=this._appService.exists_status
                              // console.log("@@@@@@@"+this.service_status_stirng);
                               
                               });
                               this._appService.autoSearchService(this.emailId).add(data =>{// this.source_name = data
                                 //  console.log("the source name are "+ JSON.stringify(this.source_name))
                               }
                               ) 
                               

                               //this.manageSourcesFtpData = data).add(data => {


                
        }


// notifyMe(){
//  // var permission = Notification.permission;
//   console.log("Notify me button pressed");

//   this._appService.getEmployees().subscribe(data => this.Employee = data).add(data => {

//   });
  
//   // if (!("Notification" in window)) {
//   //   alert("This browser does not support system notifications");
  
//   // }
//   // // else if (Notification.permission === "granted") {

//   //   // If it's okay let's create a notification
//   //   var notification = new Notification("Hi there!");
//   // }

// }
// // Success(){
  
// //   this.id = setInterval(()=> {
// //     this._appService.getEmployees().subscribe(data => this.Employee = data).add(data => {
// //       this.toasterService.Success("You got a message","Notification");
// //          });
// //         },2000);
    
    
  
  
// // }

// // Warning(){
// //   this.toasterService.Warning("Warning button clicked");
// // }
// // ngOnDestroy() {
// //   if (this.id) {
// //     clearInterval(this.id);
//  // }
// }

}
