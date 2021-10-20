import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  

  


  constructor(private httpClient: HttpClient) { }

  public susermail = sessionStorage.getItem('email');
  public sroleuser = sessionStorage.getItem('role');
  public sname = sessionStorage.getItem('username');
  //sessionStorage.setItem('[role]', userData["role"]);

  authenticate(username, password) {
    
   // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
   //const headers = new HttpHeaders({ Authorization: 'Bearer ' + sessionStorage.getItem('Bearertoken') });
    
    return this.httpClient.post(environment.urlAuth,
      {"username" :username,
      "password" :password
    }
      ).pipe(
    //return this.httpClient.get('http://localhost:8081/basicauth').pipe(
 map(
 userData => {
   
 
  //sessionStorage.setItem('username', username);
 //sessionStorage.setItem('lname', userData["lastname"]);
 sessionStorage.setItem('username', userData["username"]);
 sessionStorage.setItem('email', userData["email"]);
 sessionStorage.setItem('role', userData["roles"]);// kif yebda 3andou plusierus role kifeh ye5ouh roul 2 walla 3 men lista
 sessionStorage.setItem('token', userData["accessToken"]);


 console.log("username --->"  + username);

this.susermail =sessionStorage.getItem('email');
this.sname= sessionStorage.getItem('username');
this.sroleuser =sessionStorage.getItem('role');

 
/*
 let token = userData["jwttoken"].json();
 sessionStorage.setItem('token', token);
 console.log("token+++++++"  );
 console.log("token"  + token);
 console.log("token+++++++------- "  );*/
    
/*
 let authString = 'Basic ' + btoa(username + ':' + password);
 sessionStorage.setItem('basicauth', authString);
*/

let Bearertoken = 'Bearer ' + userData["accessToken"];
 sessionStorage.setItem('Bearertoken', Bearertoken);
 
 console.log("***** authenticate ->username : "+  username + "   " +
  " authenticate  ->password : " + password + "jwt ->" + userData["accessToken"]);
 console.log("userData -> " + userData );
 return userData;
 }
 )
 );
 /*
    if (username === "amine" && password === "1234") {
    sessionStorage.setItem('username', username)
    return true;
    } else {
    return false;
    }
    */
    }

    isUserLoggedIn() {
    let user = sessionStorage.getItem('email')
    console.log(!(user === null))
    return !(user === null)
    }
    
    logOut() {
    sessionStorage.removeItem('email');
   // sessionStorage.removeItem('token')
  }
 /*
 sessionStorage.removeItem('lname');
 sessionStorage.removeItem('name');
 sessionStorage.removeItem('role');
 sessionStorage.removeItem('basicauth');
 */
    
/*
    createAuthorizationHeader(headers: Headers) {
      var token = sessionStorage.getItem('token');

      headers.append('Authorization', 'Bearer ' + token);
      console.log("token -> " + token );
  }
*/
}
