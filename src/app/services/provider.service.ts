import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
//import {Http, Response, Headers, RequestOptions} from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  //urlProviders = 'http://127.0.0.1:8081/providers';
  provider: any;
  username = sessionStorage.getItem('username');
 password = sessionStorage.getItem('password');

  constructor(private Http: HttpClient) { }
 
  createAuthorizationHeader(headers: Headers) {
    var token = sessionStorage.getItem('token');

    headers.append('Authorization', 'Bearer ' + token);
    console.log("token -> " + token );
}
  listProviders() {
    //basic auth
 // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
 // return this.Http.get(environment.urlProviders + '/list',{headers});
 //jwt
 /*
 const headers = new HttpHeaders({ Authorization: 'Bearer ' + sessionStorage.getItem('token') });
 
 
  
 return this.Http.get(environment.urlProviders + '/list',{headers});
 */
  return this.Http.get(environment.urlProviders + '/list');
  }

  createProvider(myform:any) {
  this.provider = {
  'name': myform.value.providerName,
  'email': myform.value.providerEmail,
  'address': myform.value.providerAdress
  }
 // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
 // return this.Http.post(environment.urlProviders + '/add', this.provider,{headers});
  return this.Http.post(environment.urlProviders + '/add', this.provider);
  }


  updateProvider(myObj:any) {
    //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
  //return this.Http.put(environment.urlProviders + '/' + myObj['id'], myObj,{headers});
  return this.Http.put(environment.urlProviders + '/' + myObj['id'], myObj);
  }

  deleteProvider(myObj:any) {
 // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
 // return this.Http.delete(environment.urlProviders + '/' + myObj['id'],{headers})
  return this.Http.delete(environment.urlProviders + '/' + myObj['id'])
  }

  getProvider(id:any) {
   // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
  //return this.Http.get(environment.urlProviders + '/' + id,{headers})
  return this.Http.get(environment.urlProviders + '/' + id)
  }

  
 }