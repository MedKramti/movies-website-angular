import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HandleErrorService {

  constructor() { }

  public static handleError(error:any): string {
    if (error.status == 401)
     return "Unauthorized, Please verify your key!"
    else
      return  "Cannot connect to the server!"
  }
}
