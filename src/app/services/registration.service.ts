import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private Http: HttpClient) { }
  user :any ;

  createUser(myform:any) {
    this.user = {
    
    'username': myform.value.username,
    'email': myform.value.email,
    'password': myform.value.passward,

    'role': [myform.value.role]
    
    }
    return this.Http.post(environment.urlRegistration, this.user);
    }
  
}
