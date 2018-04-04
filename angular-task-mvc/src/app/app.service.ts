import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions,RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  public id_delete: string;
  emailId: any;
	exists_status: boolean=false;
  constructor(private http: Http) { }

  saveData(dataObj){
       console.log("the Object is========" + JSON.stringify(dataObj));
    //   let headerOptions = new Headers({'Content-Type':'application/json'}); 
    	
       let requestOptions = new RequestOptions({method : RequestMethod.Post});
       
       //this is a url which is used to link with the rest class & save the data in the database      
    return this.http.post('http://localhost:8081/SpringMVC_Task/saveEmployee', dataObj,requestOptions).subscribe(res => res.json());
      
  }

  getEmployees()
  {
      
let headerOptions = new Headers({'Content-Type':'application/json'}); 

let requestOptions = new RequestOptions({method : RequestMethod.Get, headers : headerOptions});
  
  //this is a url which is used to connect with the rest class & retrieve data from the database to UI
  return this.http.get("http://localhost:8081/SpringMVC_Task/getEmployee", "").map((response: Response) => response.json());
}

deleteEmployee(id){

  let headerOptions = new Headers({'Content-Type':'application/json'}); 

let requestOptions = new RequestOptions({method : RequestMethod.Delete, headers : headerOptions});

    this.id_delete = id;
    //url which is used to connect with the rest class & delete data from database and UI as well
    return this.http.delete("http://localhost:8081/SpringMVC_Task/deleteById/" + this.id_delete, "").subscribe(res =>res.json());

}
updateEmp(dataObj){
  let headerOptions = new Headers( {'Content-Type':'application/json'} );

  let requestOptions = new RequestOptions( {method : RequestMethod.Post, headers:headerOptions} );

  return this.http.post('http://localhost:8081/SpringMVC_Task/updateEmp', dataObj,requestOptions).subscribe(res => console.log(res.json()));
}

autoSearchService(input_text)
{
  
            return this.http.get("http://localhost:8081/SpringMVC_Task/autoSearch?term=" +input_text, "").subscribe(response => this.emailId=response.json()).add(data =>{
    console.log("data is "+ data);
    console.log("the source names "+ this.emailId)
    var sv =this.emailId;
    for(var i=0;i<sv.length; i++)
    {
        if(input_text== sv[i])
        {
            console.log("hlo");
            this.exists_status=true;
            break;
        }
        else{
            this.exists_status=false;
        }
    }

            });             
              
            }

            
}

