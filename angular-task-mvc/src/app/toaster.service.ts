import { Injectable } from '@angular/core';
declare var toastr : any

@Injectable()
export class ToasterService {

  constructor() { }

Success(title : string, message?: string){
  toastr.info(title,message);
}

Warning(title: string, message?: string){
  toastr.warning(title, message);
}

}
